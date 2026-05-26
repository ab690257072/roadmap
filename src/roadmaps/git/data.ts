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
          "id": "bY6b1GV2XQQ52NOx8gWFj",
          "label": "What is Version Control?",
          "zh": "什么是版本控制",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 984,
          "y": 300,
          "w": 276,
          "h": 49
        },
        {
          "id": "1iOkbO5juk2LO-WZHx_W6",
          "label": "git init",
          "zh": "git init（初始化仓库）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 215,
          "y": 304,
          "w": 224,
          "h": 49
        },
        {
          "id": "dhIx1GnynvbSUriqYLUt0",
          "label": "Why use Version Control?",
          "zh": "为什么需要版本控制",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 984,
          "y": 353,
          "w": 276,
          "h": 49
        },
        {
          "id": "NMCWgzhhfUvFOMO5GbF_u",
          "label": "git config",
          "zh": "git config（配置 Git）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 215,
          "y": 359,
          "w": 224,
          "h": 49
        },
        {
          "id": "HlUUGj3dOZ68t4gIjerXh",
          "label": "Learn the Basics",
          "zh": "基础知识",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 570,
          "y": 374,
          "w": 277,
          "h": 49
        },
        {
          "id": "_jSTrYN9G8EsGHkbusKPU",
          "label": "Git vs Other VCS",
          "zh": "Git 与其他 VCS 对比",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 984,
          "y": 406,
          "w": 276,
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
      "zh": "阶段 02：什么是仓库",
      "en": "What is a Repository",
      "desc": "按 roadmap.sh 原始顺序整理的第 2 组学习节点。",
      "nodes": [
        {
          "id": "tVvxC5JQgUb_B8kOqYpD8",
          "label": "Local vs Global Config",
          "zh": "本地与全局配置",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 215,
          "y": 413,
          "w": 224,
          "h": 49
        },
        {
          "id": "v7hCNbgPByi3YiLSs46BK",
          "label": "Installing Git Locally",
          "zh": "安装GitLocally（Git命令）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 984,
          "y": 459,
          "w": 276,
          "h": 49
        },
        {
          "id": "PtU5Qwfzn3N1i3oRlCGoR",
          "label": "What is a Repository",
          "zh": "什么是仓库",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 570,
          "y": 472,
          "w": 277,
          "h": 49
        },
        {
          "id": "Sv36oxTZwlUv-i1K28NeP",
          "label": "Working Directory",
          "zh": "工作区",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 215,
          "y": 507,
          "w": 224,
          "h": 49
        },
        {
          "id": "1Koej79yTv-OAswVZwgGq",
          "label": "Cloning Repositories",
          "zh": "克隆仓库",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 488,
          "y": 556,
          "w": 250,
          "h": 49
        },
        {
          "id": "h71Tx3nkfUrnhaqcHlDkQ",
          "label": "Staging Area",
          "zh": "暂存区",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 215,
          "y": 560,
          "w": 224,
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
      "zh": "阶段 03：分支基础",
      "en": "Branching Basics",
      "desc": "按 roadmap.sh 原始顺序整理的第 3 组学习节点。",
      "nodes": [
        {
          "id": "bXfCUG3h1TIFPgD4WUDph",
          "label": "Branching Basics",
          "zh": "分支基础",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1049,
          "y": 574,
          "w": 216,
          "h": 49
        },
        {
          "id": "sBQOInoFBU9XfkPZ-JlyT",
          "label": "Managing Remotes",
          "zh": "管理远程",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 488,
          "y": 609,
          "w": 250,
          "h": 49
        },
        {
          "id": "2_z3R7seCvQVj-Na4H1SV",
          "label": "Committing Changes",
          "zh": "提交变更",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 215,
          "y": 613,
          "w": 224,
          "h": 49
        },
        {
          "id": "OegitQ5Ngjvd3ZfMpfrkM",
          "label": "Creating Branch",
          "zh": "创建分支",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1049,
          "y": 653,
          "w": 216,
          "h": 49
        },
        {
          "id": "ZVMCh9om37ee1qsecFa-N",
          "label": "Pushing / Pulling Changes",
          "zh": "推送与拉取变更",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 488,
          "y": 662,
          "w": 250,
          "h": 49
        },
        {
          "id": "_dPOVUbxApx0pfKPH8fgr",
          "label": "Renaming Branch",
          "zh": "重命名分支",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1049,
          "y": 706,
          "w": 216,
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
      "zh": "阶段 04：Git 远程仓库",
      "en": "Git Remotes",
      "desc": "按 roadmap.sh 原始顺序整理的第 4 组学习节点。",
      "nodes": [
        {
          "id": "Gybnekbd1rJKTOf4hJ4Sh",
          "label": "Fetch without Merge",
          "zh": "fetch 不自动合并",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 488,
          "y": 715,
          "w": 250,
          "h": 49
        },
        {
          "id": "oz2oRAhaEQb0Fm3aRJQG8",
          "label": ".gitignore",
          "zh": ".gitignore 忽略规则",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 208,
          "y": 716,
          "w": 240,
          "h": 49
        },
        {
          "id": "1uDenoQ6zu7CT69FR2iQB",
          "label": "Deleting Branch",
          "zh": "删除分支",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1049,
          "y": 759,
          "w": 216,
          "h": 49
        },
        {
          "id": "IfUm5D_zNaUKMd4HX4Fi4",
          "label": "Viewing Commit History",
          "zh": "查看提交历史",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 208,
          "y": 769,
          "w": 240,
          "h": 49
        },
        {
          "id": "aWx9WHUrgofcTr8B-fQYe",
          "label": "Git Remotes",
          "zh": "Git 远程仓库",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 544,
          "y": 799,
          "w": 180,
          "h": 49
        },
        {
          "id": "NeSvgS2yA5x8qbcJHrV__",
          "label": "GitHub Essentials",
          "zh": "GitHub 基础",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 797,
          "y": 799,
          "w": 215,
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
      "zh": "阶段 05：切换分支",
      "en": "Checkout Branch",
      "desc": "按 roadmap.sh 原始顺序整理的第 5 组学习节点。",
      "nodes": [
        {
          "id": "PtRo-wGiNAagZ6CykfvMr",
          "label": "Checkout Branch",
          "zh": "切换分支",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1049,
          "y": 812,
          "w": 216,
          "h": 49
        },
        {
          "id": "agtPWS8j6i6wQPk10cy8E",
          "label": "Fast-Forward vs Non-FF",
          "zh": "Fast-Forward（技术术语）与Non-FF（技术术语）对比",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 209,
          "y": 852,
          "w": 236,
          "h": 49
        },
        {
          "id": "sNuy6NMjLOEkJlqdEjFPq",
          "label": "Merging Basics",
          "zh": "Merging（技术术语）基础",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1049,
          "y": 865,
          "w": 216,
          "h": 49
        },
        {
          "id": "i7fIIHcBEk473te8bniJ5",
          "label": "Creating Account",
          "zh": "创建Account",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 797,
          "y": 879,
          "w": 215,
          "h": 49
        },
        {
          "id": "99FVJ3Zs8n6lr8L95mG6g",
          "label": "Rebase",
          "zh": "Rebase（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 209,
          "y": 905,
          "w": 116,
          "h": 49
        },
        {
          "id": "Z-srOhYFGVEKDexlJ6cjt",
          "label": "Squash",
          "zh": "Squash（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 330,
          "y": 905,
          "w": 115,
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
      "zh": "阶段 06：合并Strategies",
      "en": "Merge Strategies",
      "desc": "按 roadmap.sh 原始顺序整理的第 6 组学习节点。",
      "nodes": [
        {
          "id": "0rHDUbAdXqH9zQW2VfJ8v",
          "label": "Merge Strategies",
          "zh": "合并Strategies",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 544,
          "y": 932,
          "w": 180,
          "h": 49
        },
        {
          "id": "qZFtRABvlBbVvsy6T00J2",
          "label": "GitHub Interface",
          "zh": "GitHub接口",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 797,
          "y": 932,
          "w": 215,
          "h": 49
        },
        {
          "id": "9Dt4Gyiiq5jteWSKxsRMK",
          "label": "Handling Conflicts",
          "zh": "处理Conflicts",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 209,
          "y": 958,
          "w": 236,
          "h": 49
        },
        {
          "id": "GS3f1FKFVKT0-GJQrgCm8",
          "label": "Setting up Profile",
          "zh": "搭建剖析",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 797,
          "y": 985,
          "w": 215,
          "h": 49
        },
        {
          "id": "KbVvFVQ4k77R2_ddsc7WT",
          "label": "Profile Readme",
          "zh": "剖析Readme",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1077,
          "y": 985,
          "w": 178,
          "h": 49
        },
        {
          "id": "eFf2fesrs-1aVM5tH3ORQ",
          "label": "Cherry Picking Commits",
          "zh": "Cherry Picking Commits（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 209,
          "y": 1011,
          "w": 236,
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
      "zh": "阶段 07：创建Repositories",
      "en": "Creating Repositories",
      "desc": "按 roadmap.sh 原始顺序整理的第 7 组学习节点。",
      "nodes": [
        {
          "id": "c_FO6xMixrrMo6iisfsvl",
          "label": "Creating Repositories",
          "zh": "创建Repositories",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 797,
          "y": 1038,
          "w": 215,
          "h": 49
        },
        {
          "id": "HEqBbw_A4ZbJI5zEy8ViN",
          "label": "Private vs Public",
          "zh": "Private（技术术语）与Public（技术术语）对比",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1077,
          "y": 1038,
          "w": 178,
          "h": 49
        },
        {
          "id": "l1Wf7Pe_ah8ycCgslfSK4",
          "label": "Forking vs Cloning",
          "zh": "Forking（技术术语）与克隆对比",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 208,
          "y": 1096,
          "w": 222,
          "h": 49
        },
        {
          "id": "7lRUYWNSpHvJ-QyIE8RMa",
          "label": "Commit Messages",
          "zh": "COMMIT 提交Messages",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 787,
          "y": 1107,
          "w": 232,
          "h": 49
        },
        {
          "id": "1Ulxl4VUvRSfyCPpi-iv8",
          "label": "Markdown",
          "zh": "Markdown（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1068,
          "y": 1109,
          "w": 196,
          "h": 49
        },
        {
          "id": "crdllx5cH_seIpgVPvHg_",
          "label": "Issues",
          "zh": "Issues（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 208,
          "y": 1149,
          "w": 222,
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
      "zh": "阶段 08：分支Naming",
      "en": "Branch Naming",
      "desc": "按 roadmap.sh 原始顺序整理的第 8 组学习节点。",
      "nodes": [
        {
          "id": "ks1Pip-RM-UWD6zuF2j4n",
          "label": "Branch Naming",
          "zh": "分支Naming",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 787,
          "y": 1160,
          "w": 232,
          "h": 49
        },
        {
          "id": "WIVr7JxO1AJTNObW8mtY3",
          "label": "Project Readme",
          "zh": "Project Readme（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1068,
          "y": 1161,
          "w": 196,
          "h": 49
        },
        {
          "id": "8lXXVFkgK6n5IHaYkYe3l",
          "label": "PR from a Fork",
          "zh": "PRFROM 指定表aFork",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 502,
          "y": 1170,
          "w": 162,
          "h": 49
        },
        {
          "id": "x6eILrLCQrVpz4j8uOuy6",
          "label": "Pull Requests",
          "zh": "拉取Requests",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 208,
          "y": 1202,
          "w": 222,
          "h": 49
        },
        {
          "id": "GwDNk2HBjASr_NWIL4G3-",
          "label": "PR Guidelines",
          "zh": "PR Guidelines（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 787,
          "y": 1213,
          "w": 232,
          "h": 49
        },
        {
          "id": "lONqOqD-4slxa9B5i9ADX",
          "label": "GitHub Wikis",
          "zh": "GitHub Wikis（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1068,
          "y": 1213,
          "w": 196,
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
      "zh": "阶段 09：Collaboration on GitHub（技术术语）",
      "en": "Collaboration on GitHub",
      "desc": "按 roadmap.sh 原始顺序整理的第 9 组学习节点。",
      "nodes": [
        {
          "id": "r-u1vTpUyuvsB0revOU0C",
          "label": "Collaborators",
          "zh": "Collaborators（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 503,
          "y": 1223,
          "w": 161,
          "h": 49
        },
        {
          "id": "y4DkB5NvTh41IeT0G2gr-",
          "label": "Labelling Issues / PRs",
          "zh": "Labelling Issues / PRs（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 208,
          "y": 1255,
          "w": 222,
          "h": 49
        },
        {
          "id": "Ddkss13_qDJTquDHbVTVs",
          "label": "CITATION files",
          "zh": "CITATION files（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1068,
          "y": 1265,
          "w": 196,
          "h": 49
        },
        {
          "id": "xLB2fhsOm0Vu3xg_PusJB",
          "label": "Code Reviews",
          "zh": "代码Reviews",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 787,
          "y": 1266,
          "w": 232,
          "h": 49
        },
        {
          "id": "dQS1V0zZxeKhHhUo3STBK",
          "label": "Saved Replies",
          "zh": "Saved Replies（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 216,
          "y": 1315,
          "w": 207,
          "h": 49
        },
        {
          "id": "d_GNnB6PBINz1jxGNWAE-",
          "label": "Collaboration on GitHub",
          "zh": "Collaboration on GitHub（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 473,
          "y": 1357,
          "w": 250,
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
      "zh": "阶段 10：文档",
      "en": "Documentation",
      "desc": "按 roadmap.sh 原始顺序整理的第 10 组学习节点。",
      "nodes": [
        {
          "id": "D2WIExwfSnkAPIa5O-Hp5",
          "label": "Documentation",
          "zh": "文档",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1068,
          "y": 1357,
          "w": 196,
          "h": 49
        },
        {
          "id": "oWMaOWU06juoIuzXNe-wt",
          "label": "Mentions",
          "zh": "Mentions（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 216,
          "y": 1368,
          "w": 207,
          "h": 49
        },
        {
          "id": "XstmIysIi_lWo6RzszLBt",
          "label": "Reactions",
          "zh": "Reactions（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 216,
          "y": 1421,
          "w": 207,
          "h": 49
        },
        {
          "id": "pJ-najh7dXhhYA_0bDiR5",
          "label": "Contribution Guidelines",
          "zh": "Contribution Guidelines（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 787,
          "y": 1447,
          "w": 232,
          "h": 49
        },
        {
          "id": "i3AbARgzQtxtlB-1AS8zv",
          "label": "Clean Git History",
          "zh": "CleanGit历史",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 787,
          "y": 1500,
          "w": 232,
          "h": 49
        },
        {
          "id": "X9K3PBpGsMoXkJsKdJPI7",
          "label": "Git Stash Basics",
          "zh": "Git Stash Basics（Git 命令）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 519,
          "y": 1519,
          "w": 186,
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
      "zh": "阶段 11：GitHub Projects（技术术语）",
      "en": "GitHub Projects",
      "desc": "按 roadmap.sh 原始顺序整理的第 11 组学习节点。",
      "nodes": [
        {
          "id": "snWQHCQECZyUXHdn6ppIk",
          "label": "GitHub Discussions",
          "zh": "GitHub Discussions（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 208,
          "y": 1528,
          "w": 222,
          "h": 49
        },
        {
          "id": "lXC07j6dOa3rQixY1P-Ob",
          "label": "Linear vs Non-Linear",
          "zh": "Linear（技术术语）与Non-Linear（技术术语）对比",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 208,
          "y": 1629,
          "w": 222,
          "h": 49
        },
        {
          "id": "DzFJDdqnSy5GeGHWOpcVo",
          "label": "GitHub Projects",
          "zh": "GitHub Projects（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 787,
          "y": 1631,
          "w": 182,
          "h": 49
        },
        {
          "id": "yMx3LdadPz4g25CL3N8da",
          "label": "Working in a Team",
          "zh": "工作inaTeam",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1068,
          "y": 1632,
          "w": 196,
          "h": 49
        },
        {
          "id": "V8nLIvddyOKTzEjOJX5GW",
          "label": "HEAD",
          "zh": "HEAD（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 208,
          "y": 1682,
          "w": 222,
          "h": 49
        },
        {
          "id": "zen3RRdK9_nPAYgicRoHk",
          "label": "History",
          "zh": "历史",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 544,
          "y": 1721,
          "w": 137,
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
      "zh": "阶段 12：Collaborators / Members（技术术语）",
      "en": "Collaborators / Members",
      "desc": "按 roadmap.sh 原始顺序整理的第 12 组学习节点。",
      "nodes": [
        {
          "id": "_ft-uvXt6s_xrcMT3fbSF",
          "label": "Collaborators / Members",
          "zh": "Collaborators / Members（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1020,
          "y": 1721,
          "w": 249,
          "h": 49
        },
        {
          "id": "q0zy_hXav5iXw8LpGVJVd",
          "label": "Project Planning",
          "zh": "Project Planning（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 787,
          "y": 1723,
          "w": 182,
          "h": 49
        },
        {
          "id": "0cLf7FiI9CX--UX45sm2f",
          "label": "Detached HEAD",
          "zh": "Detached HEAD（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 208,
          "y": 1735,
          "w": 222,
          "h": 49
        },
        {
          "id": "RMrxQLhrINO5g4Mhxh5qS",
          "label": "GitHub Organizations",
          "zh": "GitHub Organizations（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1020,
          "y": 1774,
          "w": 249,
          "h": 49
        },
        {
          "id": "RFJgfuxoVxt22QlwLI5mW",
          "label": "Kanban Boards",
          "zh": "Kanban Boards（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 787,
          "y": 1776,
          "w": 182,
          "h": 49
        },
        {
          "id": "qFEonbCMLri8iA0yONwuf",
          "label": "git log options",
          "zh": "git log options（Git 命令）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 208,
          "y": 1788,
          "w": 222,
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
      "zh": "阶段 13：Teams within Organization（技术术语）",
      "en": "Teams within Organization",
      "desc": "按 roadmap.sh 原始顺序整理的第 13 组学习节点。",
      "nodes": [
        {
          "id": "wydgCxR5VnieBpRolXt8i",
          "label": "Teams within Organization",
          "zh": "Teams within Organization（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1020,
          "y": 1827,
          "w": 249,
          "h": 49
        },
        {
          "id": "sxvT2hGko2PDRBoBrCGWD",
          "label": "Roadmaps",
          "zh": "路线",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 787,
          "y": 1829,
          "w": 182,
          "h": 49
        },
        {
          "id": "dLr55Om7IOvI53c1DgTKc",
          "label": "git revert",
          "zh": "git revert（撤销提交）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 473,
          "y": 1878,
          "w": 117,
          "h": 49
        },
        {
          "id": "TNBz5755PhI6iKxTQTqcS",
          "label": "Automations",
          "zh": "Automations（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 787,
          "y": 1882,
          "w": 182,
          "h": 49
        },
        {
          "id": "Rwpeltygwzcf6hnuZNURE",
          "label": "Between Commits",
          "zh": "Between Commits（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1065,
          "y": 1898,
          "w": 202,
          "h": 49
        },
        {
          "id": "Uc7FyfAKpDFRGRNHwztFo",
          "label": "--soft",
          "zh": "--soft（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 210,
          "y": 1927,
          "w": 104,
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
      "zh": "阶段 14：Undoing变更",
      "en": "Undoing Changes",
      "desc": "按 roadmap.sh 原始顺序整理的第 14 组学习节点。",
      "nodes": [
        {
          "id": "O-zoAWkDvyn7B8_TmY257",
          "label": "Between Branches",
          "zh": "Between Branches（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1065,
          "y": 1951,
          "w": 202,
          "h": 49
        },
        {
          "id": "V_joZNpQsS9G9PI-o-GmC",
          "label": "--hard",
          "zh": "--hard（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 210,
          "y": 1980,
          "w": 104,
          "h": 49
        },
        {
          "id": "igrR7LguU1jemg_mf_AD6",
          "label": "git reset",
          "zh": "git reset（重置）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 374,
          "y": 1980,
          "w": 110,
          "h": 49
        },
        {
          "id": "0Yi4cryT2v2SGBjouOas3",
          "label": "Undoing Changes",
          "zh": "Undoing变更",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 518,
          "y": 1980,
          "w": 187,
          "h": 49
        },
        {
          "id": "-0zQvCHG8jS_ghSjmTeIx",
          "label": "Viewing Diffs",
          "zh": "Viewing Diffs（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 793,
          "y": 1980,
          "w": 177,
          "h": 49
        },
        {
          "id": "mzjtCdpke1ayHcEuS-YUS",
          "label": "Staged Changes",
          "zh": "Staged变更",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1065,
          "y": 2004,
          "w": 202,
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
      "zh": "阶段 15：--mixed（技术术语）",
      "en": "--mixed",
      "desc": "按 roadmap.sh 原始顺序整理的第 15 组学习节点。",
      "nodes": [
        {
          "id": "qis7Z5VRxMcOmbesQlegZ",
          "label": "--mixed",
          "zh": "--mixed（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 210,
          "y": 2033,
          "w": 104,
          "h": 49
        },
        {
          "id": "uxqJzQFRcALqatNRIWR0w",
          "label": "Unstaged Changes",
          "zh": "Unstaged变更",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1065,
          "y": 2057,
          "w": 202,
          "h": 49
        },
        {
          "id": "jzYjHx-gIKSP8dQUTqWVw",
          "label": "commit-msg",
          "zh": "COMMIT 提交-msg",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 532,
          "y": 2105,
          "w": 198,
          "h": 49
        },
        {
          "id": "d0-u_-_vtPK8tnUpnj_NB",
          "label": "What and Why use?",
          "zh": "什么是与为什么use?（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 222,
          "y": 2135,
          "w": 225,
          "h": 49
        },
        {
          "id": "NjPnEXLf1Lt9qzgxccogv",
          "label": "git commit --amend",
          "zh": "git commit --amend（Git 命令）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1070,
          "y": 2139,
          "w": 196,
          "h": 49
        },
        {
          "id": "SANEQI2rgOtsMQyn4qUCq",
          "label": "post-checkout",
          "zh": "post-切换",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 532,
          "y": 2158,
          "w": 198,
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
      "zh": "阶段 16：Rewriting历史",
      "en": "Rewriting History",
      "desc": "按 roadmap.sh 原始顺序整理的第 16 组学习节点。",
      "nodes": [
        {
          "id": "x4bnsPVTiX2xOCSyrgWpF",
          "label": "Adding / Updating",
          "zh": "Adding / Updating（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 222,
          "y": 2188,
          "w": 225,
          "h": 49
        },
        {
          "id": "HMEfUFNu_Wp_Pac7VWHr-",
          "label": "git rebase",
          "zh": "git rebase（变基）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1070,
          "y": 2192,
          "w": 196,
          "h": 49
        },
        {
          "id": "buxb5TpzQ-xxn0vqtGdS3",
          "label": "post-update",
          "zh": "post-UPDATE 更新语句",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 532,
          "y": 2211,
          "w": 198,
          "h": 49
        },
        {
          "id": "sOoC-XxEoIvwKct00oKlX",
          "label": "Rewriting History",
          "zh": "Rewriting历史",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 793,
          "y": 2218,
          "w": 177,
          "h": 49
        },
        {
          "id": "BKVA6Q7DXemAYjyQOA0nh",
          "label": "git filter-branch",
          "zh": "git filter-branch（Git 命令）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1070,
          "y": 2245,
          "w": 196,
          "h": 49
        },
        {
          "id": "HhpAIzYMlMiQ9msrYZyDB",
          "label": "pre-commit",
          "zh": "pre-COMMIT 提交",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 532,
          "y": 2264,
          "w": 198,
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
      "zh": "阶段 17：Submodules（技术术语）",
      "en": "Submodules",
      "desc": "按 roadmap.sh 原始顺序整理的第 17 组学习节点。",
      "nodes": [
        {
          "id": "fjAFNjNNbPOzme9Uk_fDV",
          "label": "Submodules",
          "zh": "Submodules（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 249,
          "y": 2294,
          "w": 171,
          "h": 49
        },
        {
          "id": "OQOmxg9mCfcjt80hpvXkA",
          "label": "git push --force",
          "zh": "git push --force（Git 命令）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1070,
          "y": 2298,
          "w": 196,
          "h": 49
        },
        {
          "id": "j5kWEUKwBFg5EMm8-61K9",
          "label": "pre-push",
          "zh": "pre-推送",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 532,
          "y": 2317,
          "w": 198,
          "h": 49
        },
        {
          "id": "NeU38WPbEphJuJ_AMkH82",
          "label": "Managing Tags",
          "zh": "管理Tags",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1070,
          "y": 2384,
          "w": 196,
          "h": 49
        },
        {
          "id": "E3HAGNM-kXLL4Oci5JzpQ",
          "label": "Pushing Tags",
          "zh": "Pushing Tags（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1070,
          "y": 2437,
          "w": 196,
          "h": 49
        },
        {
          "id": "sFf1PdFfmEdQxsEntfeFq",
          "label": "Git Patch",
          "zh": "Git Patch（Git 命令）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 396,
          "y": 2465,
          "w": 125,
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
      "zh": "阶段 18：Git hooks（Git 命令）",
      "en": "Git hooks",
      "desc": "按 roadmap.sh 原始顺序整理的第 18 组学习节点。",
      "nodes": [
        {
          "id": "pqBV7BMAs0z6qpfZeW2XP",
          "label": "Git hooks",
          "zh": "Git hooks（Git 命令）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 568,
          "y": 2465,
          "w": 127,
          "h": 49
        },
        {
          "id": "iFJBF-EEnLjQVsFSXjo_i",
          "label": "Tagging",
          "zh": "Tagging（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 792,
          "y": 2465,
          "w": 177,
          "h": 49
        },
        {
          "id": "62E1tDMXB6K74OEN0WsS0",
          "label": "Checkout Tags",
          "zh": "切换Tags",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1070,
          "y": 2490,
          "w": 196,
          "h": 49
        },
        {
          "id": "v7uabKuMQPOD_hBIaHOVT",
          "label": "What and Why?",
          "zh": "什么是与为什么",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 521,
          "y": 2541,
          "w": 220,
          "h": 49
        },
        {
          "id": "Ni3HKVLanFvSrJ3u8i5I1",
          "label": "What are these?",
          "zh": "什么是these?（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 782,
          "y": 2543,
          "w": 172,
          "h": 49
        },
        {
          "id": "YmnTrjJtqHPXbEVrP8vd7",
          "label": "GitHub Releases",
          "zh": "GitHub Releases（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1070,
          "y": 2543,
          "w": 196,
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
      "zh": "阶段 19：GitHub Actions（技术术语）",
      "en": "GitHub Actions",
      "desc": "按 roadmap.sh 原始顺序整理的第 19 组学习节点。",
      "nodes": [
        {
          "id": "zsU6R2zvJKnYNU2ac4o4p",
          "label": "Client vs Server Hooks",
          "zh": "客户端与服务端Hooks对比",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 521,
          "y": 2594,
          "w": 220,
          "h": 49
        },
        {
          "id": "PUnYNBrAZWoZiopjtNgnA",
          "label": "Usecases",
          "zh": "Usecases（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 782,
          "y": 2596,
          "w": 172,
          "h": 49
        },
        {
          "id": "p6rq3lQ9YRrTqwcc31O23",
          "label": "YAML Syntax",
          "zh": "YAML语法",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1043,
          "y": 2630,
          "w": 227,
          "h": 49
        },
        {
          "id": "AmetdCURXXob5TUsikAab",
          "label": "GitHub Actions",
          "zh": "GitHub Actions（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 786,
          "y": 2677,
          "w": 164,
          "h": 49
        },
        {
          "id": "h9cf_dh_pwjialOXOlNW-",
          "label": "GitHub CLI",
          "zh": "GitHub CLI（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 254,
          "y": 2679,
          "w": 135,
          "h": 49
        },
        {
          "id": "55uHPFNwYPVZx8Cy3c985",
          "label": "Workflow Triggers",
          "zh": "Workflow Triggers（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1041,
          "y": 2683,
          "w": 227,
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
      "zh": "阶段 20：Scheduled Worfklows（技术术语）",
      "en": "Scheduled Worfklows",
      "desc": "按 roadmap.sh 原始顺序整理的第 20 组学习节点。",
      "nodes": [
        {
          "id": "uS1H9KoKGNONvETCuFBbz",
          "label": "Scheduled Worfklows",
          "zh": "Scheduled Worfklows（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1041,
          "y": 2736,
          "w": 227,
          "h": 49
        },
        {
          "id": "hru0sL1-D4bJSQI1efEyU",
          "label": "Git Reflog",
          "zh": "Git Reflog（Git 命令）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 479,
          "y": 2763,
          "w": 155,
          "h": 49
        },
        {
          "id": "vHfpoVbOW0DHNtiy0VN4X",
          "label": "Installation and Setup",
          "zh": "安装与配置",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 206,
          "y": 2765,
          "w": 244,
          "h": 50
        },
        {
          "id": "6QwlY3dEvjfAOPALcWKXQ",
          "label": "Workflow Runners",
          "zh": "Workflow Runners（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1041,
          "y": 2789,
          "w": 227,
          "h": 49
        },
        {
          "id": "ExXuwTQSI_lg4SRGW3Iu1",
          "label": "Git Bisect",
          "zh": "Git Bisect（Git 命令）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 479,
          "y": 2816,
          "w": 155,
          "h": 49
        },
        {
          "id": "lw4zHuhtxIO4kDvbyiVfq",
          "label": "Repository management",
          "zh": "仓库管理",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 206,
          "y": 2819,
          "w": 244,
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
      "zh": "阶段 21：Workflow Context（技术术语）",
      "en": "Workflow Context",
      "desc": "按 roadmap.sh 原始顺序整理的第 21 组学习节点。",
      "nodes": [
        {
          "id": "BnPiTu1Jw2kIW560a2A5T",
          "label": "Workflow Context",
          "zh": "Workflow Context（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1041,
          "y": 2842,
          "w": 227,
          "h": 49
        },
        {
          "id": "4dxVN81rXWn6VZqK99yq0",
          "label": "Git Worktree",
          "zh": "Git Worktree（Git 命令）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 479,
          "y": 2869,
          "w": 155,
          "h": 49
        },
        {
          "id": "kGnZifvXbHBf5zXIsfAQw",
          "label": "Issue Management",
          "zh": "Issue管理",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 206,
          "y": 2872,
          "w": 244,
          "h": 49
        },
        {
          "id": "aflP7oWsQzAr4YPo2LLiQ",
          "label": "Secrets and Env Vars",
          "zh": "Secrets（技术术语）与EnvVars（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1041,
          "y": 2895,
          "w": 227,
          "h": 49
        },
        {
          "id": "CGj_UX5JMOOCKinedsNRc",
          "label": "Git Attributes",
          "zh": "Git Attributes（Git 命令）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 479,
          "y": 2922,
          "w": 155,
          "h": 49
        },
        {
          "id": "s3MzDYFPMASqiS8UnvWzW",
          "label": "Pull Requests",
          "zh": "拉取Requests",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 206,
          "y": 2925,
          "w": 244,
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
      "zh": "阶段 22：缓存Dependencies",
      "en": "Caching Dependencies",
      "desc": "按 roadmap.sh 原始顺序整理的第 22 组学习节点。",
      "nodes": [
        {
          "id": "HMNhzzV6ApTKj4I_FOmUB",
          "label": "Caching Dependencies",
          "zh": "缓存Dependencies",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1041,
          "y": 2948,
          "w": 227,
          "h": 49
        },
        {
          "id": "zdunaucVe8J1tKf_z-NQo",
          "label": "Git LFS",
          "zh": "Git LFS（Git 命令）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 479,
          "y": 2975,
          "w": 156,
          "h": 49
        },
        {
          "id": "Y0EWgPsS4kZxH3y53jNxY",
          "label": "Use in Automation",
          "zh": "Use in Automation（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 206,
          "y": 2978,
          "w": 244,
          "h": 49
        },
        {
          "id": "alysXC4b1hGi9ZdQ5-40y",
          "label": "Storing Artifacts",
          "zh": "Storing Artifacts（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1041,
          "y": 3001,
          "w": 227,
          "h": 49
        },
        {
          "id": "jc4R1zhd1YeCEbVuxwJWy",
          "label": "Workflow Status",
          "zh": "Workflow状态",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1041,
          "y": 3054,
          "w": 227,
          "h": 49
        },
        {
          "id": "lSCnKhmRr6xrKVYxO8idD",
          "label": "REST API",
          "zh": "REST API（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 479,
          "y": 3058,
          "w": 156,
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
      "zh": "阶段 23：创建Apps",
      "en": "Creating Apps",
      "desc": "按 roadmap.sh 原始顺序整理的第 23 组学习节点。",
      "nodes": [
        {
          "id": "560GJXFTt7DPdJjKtSDOo",
          "label": "GitHub Apps",
          "zh": "GitHub Apps（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 216,
          "y": 3059,
          "w": 155,
          "h": 49
        },
        {
          "id": "SsogoCgJIbeTD6tk8UhTe",
          "label": "Marketplace Actions",
          "zh": "Marketplace Actions（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1041,
          "y": 3107,
          "w": 227,
          "h": 49
        },
        {
          "id": "KlXPt-K6br8PtpLgELaCj",
          "label": "GraphQL API",
          "zh": "GraphQL API（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 479,
          "y": 3111,
          "w": 156,
          "h": 49
        },
        {
          "id": "qrdOARfqGPF9xhF6snbAn",
          "label": "OAuth Apps",
          "zh": "OAuth Apps（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 216,
          "y": 3112,
          "w": 155,
          "h": 49
        },
        {
          "id": "5Oax1p7zIZ9HD2hmENPof",
          "label": "Creating Apps",
          "zh": "创建Apps",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 215,
          "y": 3197,
          "w": 156,
          "h": 49
        },
        {
          "id": "NV2HAXLEN7tskfgyFrbaf",
          "label": "GitHub API",
          "zh": "GitHub API（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 479,
          "y": 3197,
          "w": 156,
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
      "zh": "阶段 24：Webhooks（技术术语）",
      "en": "Webhooks",
      "desc": "按 roadmap.sh 原始顺序整理的第 24 组学习节点。",
      "nodes": [
        {
          "id": "MoG7D9kqPuA6o52-z_WDN",
          "label": "Webhooks",
          "zh": "Webhooks（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1079,
          "y": 3197,
          "w": 156,
          "h": 49
        },
        {
          "id": "ZHplGidvhxEIC3HN8KqRa",
          "label": "Deploying Static Websites",
          "zh": "Deploying静态Websites",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1021,
          "y": 3274,
          "w": 245,
          "h": 49
        },
        {
          "id": "iWn3zDMOfLLjSp6f1jQoE",
          "label": "GitHub Copilot",
          "zh": "GitHub Copilot（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 206,
          "y": 3298,
          "w": 239,
          "h": 49
        },
        {
          "id": "M2_hBvXou7cCNqsMnexCt",
          "label": "GitHub Gists",
          "zh": "GitHub Gists（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 450,
          "y": 3299,
          "w": 201,
          "h": 49
        },
        {
          "id": "4slyjdk2Eeg5VYY6gCDG6",
          "label": "GitHub Models",
          "zh": "GitHub Models（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 206,
          "y": 3351,
          "w": 239,
          "h": 49
        },
        {
          "id": "rqPCHh25xX_ROMr-ULpaw",
          "label": "GitHub Packages",
          "zh": "GitHub Packages（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 450,
          "y": 3352,
          "w": 201,
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
      "zh": "阶段 25：GitHub Pages（技术术语）",
      "en": "GitHub Pages",
      "desc": "按 roadmap.sh 原始顺序整理的第 25 组学习节点。",
      "nodes": [
        {
          "id": "bnai6R6pOq_L5CPdbVwMW",
          "label": "GitHub Pages",
          "zh": "GitHub Pages（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1089,
          "y": 3377,
          "w": 176,
          "h": 49
        },
        {
          "id": "R20LXLLEzNn-SpyFDMRXj",
          "label": "GitHub Marketplace",
          "zh": "GitHub Marketplace（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 206,
          "y": 3403,
          "w": 239,
          "h": 49
        },
        {
          "id": "NdfwgwMOewiyEAFyC2l7U",
          "label": "GitHub Codespaces",
          "zh": "GitHub Codespaces（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 450,
          "y": 3405,
          "w": 201,
          "h": 49
        },
        {
          "id": "pFyMiyNQ16-kP7jKaKKEU",
          "label": "GitHub Education",
          "zh": "GitHub Education（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 206,
          "y": 3457,
          "w": 239,
          "h": 49
        },
        {
          "id": "f2PG4t6iVtfIH8BVe5H7f",
          "label": "GitHub Security",
          "zh": "GitHub安全",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 450,
          "y": 3458,
          "w": 201,
          "h": 49
        },
        {
          "id": "VdoxEWaU56-QCbHFRw649",
          "label": "Custom Domains",
          "zh": "Custom Domains（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1022,
          "y": 3486,
          "w": 244,
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
      "zh": "阶段 26：GitHub Sponsors（技术术语）",
      "en": "GitHub Sponsors",
      "desc": "按 roadmap.sh 原始顺序整理的第 26 组学习节点。",
      "nodes": [
        {
          "id": "vhdGUhMAyre_Xya6IxZ-t",
          "label": "GitHub Sponsors",
          "zh": "GitHub Sponsors（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 450,
          "y": 3511,
          "w": 201,
          "h": 49
        },
        {
          "id": "iwfNYDlAgbA_rpWYcoHCC",
          "label": "Static Site Generators",
          "zh": "静态SiteGenerators",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1022,
          "y": 3539,
          "w": 244,
          "h": 49
        },
        {
          "id": "XRSVRl6iHncMmgSXoB7Lq",
          "label": "Student Developer Pack",
          "zh": "Student Developer Pack（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 206,
          "y": 3574,
          "w": 239,
          "h": 49
        },
        {
          "id": "Pg6G4fzYb_RUhANeRKlRX",
          "label": "GitHub Classroom",
          "zh": "GitHub Classroom（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 206,
          "y": 3627,
          "w": 239,
          "h": 49
        },
        {
          "id": "B1KiSOt2b8t8FYD7Jxw2A",
          "label": "Campus Program",
          "zh": "Campus Program（技术术语）",
          "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 206,
          "y": 3679,
          "w": 239,
          "h": 49
        }
      ],
      "index": 26,
      "mapX": 610,
      "mapY": 2226,
      "mapW": 430,
      "mapH": 308
    }
  ],
  "nodes": [
    {
      "id": "HlUUGj3dOZ68t4gIjerXh",
      "label": "Learn the Basics",
      "zh": "基础知识",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 570,
      "y": 374,
      "w": 277,
      "h": 49
    },
    {
      "id": "bY6b1GV2XQQ52NOx8gWFj",
      "label": "What is Version Control?",
      "zh": "什么是版本控制",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 984,
      "y": 300,
      "w": 276,
      "h": 49
    },
    {
      "id": "dhIx1GnynvbSUriqYLUt0",
      "label": "Why use Version Control?",
      "zh": "为什么需要版本控制",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 984,
      "y": 353,
      "w": 276,
      "h": 49
    },
    {
      "id": "_jSTrYN9G8EsGHkbusKPU",
      "label": "Git vs Other VCS",
      "zh": "Git 与其他 VCS 对比",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 984,
      "y": 406,
      "w": 276,
      "h": 49
    },
    {
      "id": "v7hCNbgPByi3YiLSs46BK",
      "label": "Installing Git Locally",
      "zh": "安装GitLocally（Git命令）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 984,
      "y": 459,
      "w": 276,
      "h": 49
    },
    {
      "id": "PtU5Qwfzn3N1i3oRlCGoR",
      "label": "What is a Repository",
      "zh": "什么是仓库",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 570,
      "y": 472,
      "w": 277,
      "h": 49
    },
    {
      "id": "1iOkbO5juk2LO-WZHx_W6",
      "label": "git init",
      "zh": "git init（初始化仓库）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 215,
      "y": 304,
      "w": 224,
      "h": 49
    },
    {
      "id": "NMCWgzhhfUvFOMO5GbF_u",
      "label": "git config",
      "zh": "git config（配置 Git）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 215,
      "y": 359,
      "w": 224,
      "h": 49
    },
    {
      "id": "tVvxC5JQgUb_B8kOqYpD8",
      "label": "Local vs Global Config",
      "zh": "本地与全局配置",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 215,
      "y": 413,
      "w": 224,
      "h": 49
    },
    {
      "id": "Sv36oxTZwlUv-i1K28NeP",
      "label": "Working Directory",
      "zh": "工作区",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 215,
      "y": 507,
      "w": 224,
      "h": 49
    },
    {
      "id": "h71Tx3nkfUrnhaqcHlDkQ",
      "label": "Staging Area",
      "zh": "暂存区",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 215,
      "y": 560,
      "w": 224,
      "h": 49
    },
    {
      "id": "2_z3R7seCvQVj-Na4H1SV",
      "label": "Committing Changes",
      "zh": "提交变更",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 215,
      "y": 613,
      "w": 224,
      "h": 49
    },
    {
      "id": "oz2oRAhaEQb0Fm3aRJQG8",
      "label": ".gitignore",
      "zh": ".gitignore 忽略规则",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 208,
      "y": 716,
      "w": 240,
      "h": 49
    },
    {
      "id": "IfUm5D_zNaUKMd4HX4Fi4",
      "label": "Viewing Commit History",
      "zh": "查看提交历史",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 208,
      "y": 769,
      "w": 240,
      "h": 49
    },
    {
      "id": "bXfCUG3h1TIFPgD4WUDph",
      "label": "Branching Basics",
      "zh": "分支基础",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1049,
      "y": 574,
      "w": 216,
      "h": 49
    },
    {
      "id": "OegitQ5Ngjvd3ZfMpfrkM",
      "label": "Creating Branch",
      "zh": "创建分支",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1049,
      "y": 653,
      "w": 216,
      "h": 49
    },
    {
      "id": "_dPOVUbxApx0pfKPH8fgr",
      "label": "Renaming Branch",
      "zh": "重命名分支",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1049,
      "y": 706,
      "w": 216,
      "h": 49
    },
    {
      "id": "1uDenoQ6zu7CT69FR2iQB",
      "label": "Deleting Branch",
      "zh": "删除分支",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1049,
      "y": 759,
      "w": 216,
      "h": 49
    },
    {
      "id": "PtRo-wGiNAagZ6CykfvMr",
      "label": "Checkout Branch",
      "zh": "切换分支",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1049,
      "y": 812,
      "w": 216,
      "h": 49
    },
    {
      "id": "sNuy6NMjLOEkJlqdEjFPq",
      "label": "Merging Basics",
      "zh": "Merging（技术术语）基础",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1049,
      "y": 865,
      "w": 216,
      "h": 49
    },
    {
      "id": "NeSvgS2yA5x8qbcJHrV__",
      "label": "GitHub Essentials",
      "zh": "GitHub 基础",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 797,
      "y": 799,
      "w": 215,
      "h": 49
    },
    {
      "id": "i7fIIHcBEk473te8bniJ5",
      "label": "Creating Account",
      "zh": "创建Account",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 797,
      "y": 879,
      "w": 215,
      "h": 49
    },
    {
      "id": "qZFtRABvlBbVvsy6T00J2",
      "label": "GitHub Interface",
      "zh": "GitHub接口",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 797,
      "y": 932,
      "w": 215,
      "h": 49
    },
    {
      "id": "GS3f1FKFVKT0-GJQrgCm8",
      "label": "Setting up Profile",
      "zh": "搭建剖析",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 797,
      "y": 985,
      "w": 215,
      "h": 49
    },
    {
      "id": "c_FO6xMixrrMo6iisfsvl",
      "label": "Creating Repositories",
      "zh": "创建Repositories",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 797,
      "y": 1038,
      "w": 215,
      "h": 49
    },
    {
      "id": "KbVvFVQ4k77R2_ddsc7WT",
      "label": "Profile Readme",
      "zh": "剖析Readme",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1077,
      "y": 985,
      "w": 178,
      "h": 49
    },
    {
      "id": "HEqBbw_A4ZbJI5zEy8ViN",
      "label": "Private vs Public",
      "zh": "Private（技术术语）与Public（技术术语）对比",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1077,
      "y": 1038,
      "w": 178,
      "h": 49
    },
    {
      "id": "aWx9WHUrgofcTr8B-fQYe",
      "label": "Git Remotes",
      "zh": "Git 远程仓库",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 544,
      "y": 799,
      "w": 180,
      "h": 49
    },
    {
      "id": "sBQOInoFBU9XfkPZ-JlyT",
      "label": "Managing Remotes",
      "zh": "管理远程",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 488,
      "y": 609,
      "w": 250,
      "h": 49
    },
    {
      "id": "ZVMCh9om37ee1qsecFa-N",
      "label": "Pushing / Pulling Changes",
      "zh": "推送与拉取变更",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 488,
      "y": 662,
      "w": 250,
      "h": 49
    },
    {
      "id": "Gybnekbd1rJKTOf4hJ4Sh",
      "label": "Fetch without Merge",
      "zh": "fetch 不自动合并",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 488,
      "y": 715,
      "w": 250,
      "h": 49
    },
    {
      "id": "d_GNnB6PBINz1jxGNWAE-",
      "label": "Collaboration on GitHub",
      "zh": "Collaboration on GitHub（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 473,
      "y": 1357,
      "w": 250,
      "h": 49
    },
    {
      "id": "l1Wf7Pe_ah8ycCgslfSK4",
      "label": "Forking vs Cloning",
      "zh": "Forking（技术术语）与克隆对比",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 208,
      "y": 1096,
      "w": 222,
      "h": 49
    },
    {
      "id": "crdllx5cH_seIpgVPvHg_",
      "label": "Issues",
      "zh": "Issues（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 208,
      "y": 1149,
      "w": 222,
      "h": 49
    },
    {
      "id": "1Koej79yTv-OAswVZwgGq",
      "label": "Cloning Repositories",
      "zh": "克隆仓库",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 488,
      "y": 556,
      "w": 250,
      "h": 49
    },
    {
      "id": "x6eILrLCQrVpz4j8uOuy6",
      "label": "Pull Requests",
      "zh": "拉取Requests",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 208,
      "y": 1202,
      "w": 222,
      "h": 49
    },
    {
      "id": "8lXXVFkgK6n5IHaYkYe3l",
      "label": "PR from a Fork",
      "zh": "PRFROM 指定表aFork",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 502,
      "y": 1170,
      "w": 162,
      "h": 49
    },
    {
      "id": "r-u1vTpUyuvsB0revOU0C",
      "label": "Collaborators",
      "zh": "Collaborators（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 503,
      "y": 1223,
      "w": 161,
      "h": 49
    },
    {
      "id": "y4DkB5NvTh41IeT0G2gr-",
      "label": "Labelling Issues / PRs",
      "zh": "Labelling Issues / PRs（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 208,
      "y": 1255,
      "w": 222,
      "h": 49
    },
    {
      "id": "dQS1V0zZxeKhHhUo3STBK",
      "label": "Saved Replies",
      "zh": "Saved Replies（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 216,
      "y": 1315,
      "w": 207,
      "h": 49
    },
    {
      "id": "oWMaOWU06juoIuzXNe-wt",
      "label": "Mentions",
      "zh": "Mentions（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 216,
      "y": 1368,
      "w": 207,
      "h": 49
    },
    {
      "id": "XstmIysIi_lWo6RzszLBt",
      "label": "Reactions",
      "zh": "Reactions（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 216,
      "y": 1421,
      "w": 207,
      "h": 49
    },
    {
      "id": "0rHDUbAdXqH9zQW2VfJ8v",
      "label": "Merge Strategies",
      "zh": "合并Strategies",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 544,
      "y": 932,
      "w": 180,
      "h": 49
    },
    {
      "id": "agtPWS8j6i6wQPk10cy8E",
      "label": "Fast-Forward vs Non-FF",
      "zh": "Fast-Forward（技术术语）与Non-FF（技术术语）对比",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 209,
      "y": 852,
      "w": 236,
      "h": 49
    },
    {
      "id": "9Dt4Gyiiq5jteWSKxsRMK",
      "label": "Handling Conflicts",
      "zh": "处理Conflicts",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 209,
      "y": 958,
      "w": 236,
      "h": 49
    },
    {
      "id": "99FVJ3Zs8n6lr8L95mG6g",
      "label": "Rebase",
      "zh": "Rebase（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 209,
      "y": 905,
      "w": 116,
      "h": 49
    },
    {
      "id": "Z-srOhYFGVEKDexlJ6cjt",
      "label": "Squash",
      "zh": "Squash（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 330,
      "y": 905,
      "w": 115,
      "h": 49
    },
    {
      "id": "eFf2fesrs-1aVM5tH3ORQ",
      "label": "Cherry Picking Commits",
      "zh": "Cherry Picking Commits（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 209,
      "y": 1011,
      "w": 236,
      "h": 49
    },
    {
      "id": "7lRUYWNSpHvJ-QyIE8RMa",
      "label": "Commit Messages",
      "zh": "COMMIT 提交Messages",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 787,
      "y": 1107,
      "w": 232,
      "h": 49
    },
    {
      "id": "ks1Pip-RM-UWD6zuF2j4n",
      "label": "Branch Naming",
      "zh": "分支Naming",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 787,
      "y": 1160,
      "w": 232,
      "h": 49
    },
    {
      "id": "GwDNk2HBjASr_NWIL4G3-",
      "label": "PR Guidelines",
      "zh": "PR Guidelines（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 787,
      "y": 1213,
      "w": 232,
      "h": 49
    },
    {
      "id": "xLB2fhsOm0Vu3xg_PusJB",
      "label": "Code Reviews",
      "zh": "代码Reviews",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 787,
      "y": 1266,
      "w": 232,
      "h": 49
    },
    {
      "id": "pJ-najh7dXhhYA_0bDiR5",
      "label": "Contribution Guidelines",
      "zh": "Contribution Guidelines（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 787,
      "y": 1447,
      "w": 232,
      "h": 49
    },
    {
      "id": "D2WIExwfSnkAPIa5O-Hp5",
      "label": "Documentation",
      "zh": "文档",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1068,
      "y": 1357,
      "w": 196,
      "h": 49
    },
    {
      "id": "1Ulxl4VUvRSfyCPpi-iv8",
      "label": "Markdown",
      "zh": "Markdown（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1068,
      "y": 1109,
      "w": 196,
      "h": 49
    },
    {
      "id": "WIVr7JxO1AJTNObW8mtY3",
      "label": "Project Readme",
      "zh": "Project Readme（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1068,
      "y": 1161,
      "w": 196,
      "h": 49
    },
    {
      "id": "lONqOqD-4slxa9B5i9ADX",
      "label": "GitHub Wikis",
      "zh": "GitHub Wikis（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1068,
      "y": 1213,
      "w": 196,
      "h": 49
    },
    {
      "id": "i3AbARgzQtxtlB-1AS8zv",
      "label": "Clean Git History",
      "zh": "CleanGit历史",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 787,
      "y": 1500,
      "w": 232,
      "h": 49
    },
    {
      "id": "yMx3LdadPz4g25CL3N8da",
      "label": "Working in a Team",
      "zh": "工作inaTeam",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1068,
      "y": 1632,
      "w": 196,
      "h": 49
    },
    {
      "id": "RMrxQLhrINO5g4Mhxh5qS",
      "label": "GitHub Organizations",
      "zh": "GitHub Organizations（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1020,
      "y": 1774,
      "w": 249,
      "h": 49
    },
    {
      "id": "_ft-uvXt6s_xrcMT3fbSF",
      "label": "Collaborators / Members",
      "zh": "Collaborators / Members（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1020,
      "y": 1721,
      "w": 249,
      "h": 49
    },
    {
      "id": "wydgCxR5VnieBpRolXt8i",
      "label": "Teams within Organization",
      "zh": "Teams within Organization（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1020,
      "y": 1827,
      "w": 249,
      "h": 49
    },
    {
      "id": "DzFJDdqnSy5GeGHWOpcVo",
      "label": "GitHub Projects",
      "zh": "GitHub Projects（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 787,
      "y": 1631,
      "w": 182,
      "h": 49
    },
    {
      "id": "q0zy_hXav5iXw8LpGVJVd",
      "label": "Project Planning",
      "zh": "Project Planning（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 787,
      "y": 1723,
      "w": 182,
      "h": 49
    },
    {
      "id": "RFJgfuxoVxt22QlwLI5mW",
      "label": "Kanban Boards",
      "zh": "Kanban Boards（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 787,
      "y": 1776,
      "w": 182,
      "h": 49
    },
    {
      "id": "sxvT2hGko2PDRBoBrCGWD",
      "label": "Roadmaps",
      "zh": "路线",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 787,
      "y": 1829,
      "w": 182,
      "h": 49
    },
    {
      "id": "TNBz5755PhI6iKxTQTqcS",
      "label": "Automations",
      "zh": "Automations（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 787,
      "y": 1882,
      "w": 182,
      "h": 49
    },
    {
      "id": "snWQHCQECZyUXHdn6ppIk",
      "label": "GitHub Discussions",
      "zh": "GitHub Discussions（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 208,
      "y": 1528,
      "w": 222,
      "h": 49
    },
    {
      "id": "X9K3PBpGsMoXkJsKdJPI7",
      "label": "Git Stash Basics",
      "zh": "Git Stash Basics（Git 命令）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 519,
      "y": 1519,
      "w": 186,
      "h": 49
    },
    {
      "id": "zen3RRdK9_nPAYgicRoHk",
      "label": "History",
      "zh": "历史",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 544,
      "y": 1721,
      "w": 137,
      "h": 49
    },
    {
      "id": "lXC07j6dOa3rQixY1P-Ob",
      "label": "Linear vs Non-Linear",
      "zh": "Linear（技术术语）与Non-Linear（技术术语）对比",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 208,
      "y": 1629,
      "w": 222,
      "h": 49
    },
    {
      "id": "V8nLIvddyOKTzEjOJX5GW",
      "label": "HEAD",
      "zh": "HEAD（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 208,
      "y": 1682,
      "w": 222,
      "h": 49
    },
    {
      "id": "0cLf7FiI9CX--UX45sm2f",
      "label": "Detached HEAD",
      "zh": "Detached HEAD（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 208,
      "y": 1735,
      "w": 222,
      "h": 49
    },
    {
      "id": "qFEonbCMLri8iA0yONwuf",
      "label": "git log options",
      "zh": "git log options（Git 命令）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 208,
      "y": 1788,
      "w": 222,
      "h": 49
    },
    {
      "id": "0Yi4cryT2v2SGBjouOas3",
      "label": "Undoing Changes",
      "zh": "Undoing变更",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 518,
      "y": 1980,
      "w": 187,
      "h": 49
    },
    {
      "id": "dLr55Om7IOvI53c1DgTKc",
      "label": "git revert",
      "zh": "git revert（撤销提交）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 473,
      "y": 1878,
      "w": 117,
      "h": 49
    },
    {
      "id": "igrR7LguU1jemg_mf_AD6",
      "label": "git reset",
      "zh": "git reset（重置）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 374,
      "y": 1980,
      "w": 110,
      "h": 49
    },
    {
      "id": "Uc7FyfAKpDFRGRNHwztFo",
      "label": "--soft",
      "zh": "--soft（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 210,
      "y": 1927,
      "w": 104,
      "h": 49
    },
    {
      "id": "V_joZNpQsS9G9PI-o-GmC",
      "label": "--hard",
      "zh": "--hard（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 210,
      "y": 1980,
      "w": 104,
      "h": 49
    },
    {
      "id": "qis7Z5VRxMcOmbesQlegZ",
      "label": "--mixed",
      "zh": "--mixed（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 210,
      "y": 2033,
      "w": 104,
      "h": 49
    },
    {
      "id": "-0zQvCHG8jS_ghSjmTeIx",
      "label": "Viewing Diffs",
      "zh": "Viewing Diffs（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 793,
      "y": 1980,
      "w": 177,
      "h": 49
    },
    {
      "id": "Rwpeltygwzcf6hnuZNURE",
      "label": "Between Commits",
      "zh": "Between Commits（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1065,
      "y": 1898,
      "w": 202,
      "h": 49
    },
    {
      "id": "O-zoAWkDvyn7B8_TmY257",
      "label": "Between Branches",
      "zh": "Between Branches（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1065,
      "y": 1951,
      "w": 202,
      "h": 49
    },
    {
      "id": "mzjtCdpke1ayHcEuS-YUS",
      "label": "Staged Changes",
      "zh": "Staged变更",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1065,
      "y": 2004,
      "w": 202,
      "h": 49
    },
    {
      "id": "uxqJzQFRcALqatNRIWR0w",
      "label": "Unstaged Changes",
      "zh": "Unstaged变更",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1065,
      "y": 2057,
      "w": 202,
      "h": 49
    },
    {
      "id": "sOoC-XxEoIvwKct00oKlX",
      "label": "Rewriting History",
      "zh": "Rewriting历史",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 793,
      "y": 2218,
      "w": 177,
      "h": 49
    },
    {
      "id": "NjPnEXLf1Lt9qzgxccogv",
      "label": "git commit --amend",
      "zh": "git commit --amend（Git 命令）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1070,
      "y": 2139,
      "w": 196,
      "h": 49
    },
    {
      "id": "HMEfUFNu_Wp_Pac7VWHr-",
      "label": "git rebase",
      "zh": "git rebase（变基）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1070,
      "y": 2192,
      "w": 196,
      "h": 49
    },
    {
      "id": "BKVA6Q7DXemAYjyQOA0nh",
      "label": "git filter-branch",
      "zh": "git filter-branch（Git 命令）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1070,
      "y": 2245,
      "w": 196,
      "h": 49
    },
    {
      "id": "OQOmxg9mCfcjt80hpvXkA",
      "label": "git push --force",
      "zh": "git push --force（Git 命令）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1070,
      "y": 2298,
      "w": 196,
      "h": 49
    },
    {
      "id": "iFJBF-EEnLjQVsFSXjo_i",
      "label": "Tagging",
      "zh": "Tagging（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 792,
      "y": 2465,
      "w": 177,
      "h": 49
    },
    {
      "id": "NeU38WPbEphJuJ_AMkH82",
      "label": "Managing Tags",
      "zh": "管理Tags",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1070,
      "y": 2384,
      "w": 196,
      "h": 49
    },
    {
      "id": "E3HAGNM-kXLL4Oci5JzpQ",
      "label": "Pushing Tags",
      "zh": "Pushing Tags（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1070,
      "y": 2437,
      "w": 196,
      "h": 49
    },
    {
      "id": "62E1tDMXB6K74OEN0WsS0",
      "label": "Checkout Tags",
      "zh": "切换Tags",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1070,
      "y": 2490,
      "w": 196,
      "h": 49
    },
    {
      "id": "YmnTrjJtqHPXbEVrP8vd7",
      "label": "GitHub Releases",
      "zh": "GitHub Releases（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1070,
      "y": 2543,
      "w": 196,
      "h": 49
    },
    {
      "id": "pqBV7BMAs0z6qpfZeW2XP",
      "label": "Git hooks",
      "zh": "Git hooks（Git 命令）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 568,
      "y": 2465,
      "w": 127,
      "h": 49
    },
    {
      "id": "v7uabKuMQPOD_hBIaHOVT",
      "label": "What and Why?",
      "zh": "什么是与为什么",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 521,
      "y": 2541,
      "w": 220,
      "h": 49
    },
    {
      "id": "zsU6R2zvJKnYNU2ac4o4p",
      "label": "Client vs Server Hooks",
      "zh": "客户端与服务端Hooks对比",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 521,
      "y": 2594,
      "w": 220,
      "h": 49
    },
    {
      "id": "jzYjHx-gIKSP8dQUTqWVw",
      "label": "commit-msg",
      "zh": "COMMIT 提交-msg",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 532,
      "y": 2105,
      "w": 198,
      "h": 49
    },
    {
      "id": "SANEQI2rgOtsMQyn4qUCq",
      "label": "post-checkout",
      "zh": "post-切换",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 532,
      "y": 2158,
      "w": 198,
      "h": 49
    },
    {
      "id": "buxb5TpzQ-xxn0vqtGdS3",
      "label": "post-update",
      "zh": "post-UPDATE 更新语句",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 532,
      "y": 2211,
      "w": 198,
      "h": 49
    },
    {
      "id": "HhpAIzYMlMiQ9msrYZyDB",
      "label": "pre-commit",
      "zh": "pre-COMMIT 提交",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 532,
      "y": 2264,
      "w": 198,
      "h": 49
    },
    {
      "id": "j5kWEUKwBFg5EMm8-61K9",
      "label": "pre-push",
      "zh": "pre-推送",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 532,
      "y": 2317,
      "w": 198,
      "h": 49
    },
    {
      "id": "fjAFNjNNbPOzme9Uk_fDV",
      "label": "Submodules",
      "zh": "Submodules（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 249,
      "y": 2294,
      "w": 171,
      "h": 49
    },
    {
      "id": "x4bnsPVTiX2xOCSyrgWpF",
      "label": "Adding / Updating",
      "zh": "Adding / Updating（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 222,
      "y": 2188,
      "w": 225,
      "h": 49
    },
    {
      "id": "d0-u_-_vtPK8tnUpnj_NB",
      "label": "What and Why use?",
      "zh": "什么是与为什么use?（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 222,
      "y": 2135,
      "w": 225,
      "h": 49
    },
    {
      "id": "h9cf_dh_pwjialOXOlNW-",
      "label": "GitHub CLI",
      "zh": "GitHub CLI（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 254,
      "y": 2679,
      "w": 135,
      "h": 49
    },
    {
      "id": "vHfpoVbOW0DHNtiy0VN4X",
      "label": "Installation and Setup",
      "zh": "安装与配置",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 206,
      "y": 2765,
      "w": 244,
      "h": 50
    },
    {
      "id": "lw4zHuhtxIO4kDvbyiVfq",
      "label": "Repository management",
      "zh": "仓库管理",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 206,
      "y": 2819,
      "w": 244,
      "h": 49
    },
    {
      "id": "kGnZifvXbHBf5zXIsfAQw",
      "label": "Issue Management",
      "zh": "Issue管理",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 206,
      "y": 2872,
      "w": 244,
      "h": 49
    },
    {
      "id": "s3MzDYFPMASqiS8UnvWzW",
      "label": "Pull Requests",
      "zh": "拉取Requests",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 206,
      "y": 2925,
      "w": 244,
      "h": 49
    },
    {
      "id": "AmetdCURXXob5TUsikAab",
      "label": "GitHub Actions",
      "zh": "GitHub Actions（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 786,
      "y": 2677,
      "w": 164,
      "h": 49
    },
    {
      "id": "p6rq3lQ9YRrTqwcc31O23",
      "label": "YAML Syntax",
      "zh": "YAML语法",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1043,
      "y": 2630,
      "w": 227,
      "h": 49
    },
    {
      "id": "55uHPFNwYPVZx8Cy3c985",
      "label": "Workflow Triggers",
      "zh": "Workflow Triggers（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1041,
      "y": 2683,
      "w": 227,
      "h": 49
    },
    {
      "id": "uS1H9KoKGNONvETCuFBbz",
      "label": "Scheduled Worfklows",
      "zh": "Scheduled Worfklows（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1041,
      "y": 2736,
      "w": 227,
      "h": 49
    },
    {
      "id": "6QwlY3dEvjfAOPALcWKXQ",
      "label": "Workflow Runners",
      "zh": "Workflow Runners（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1041,
      "y": 2789,
      "w": 227,
      "h": 49
    },
    {
      "id": "BnPiTu1Jw2kIW560a2A5T",
      "label": "Workflow Context",
      "zh": "Workflow Context（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1041,
      "y": 2842,
      "w": 227,
      "h": 49
    },
    {
      "id": "aflP7oWsQzAr4YPo2LLiQ",
      "label": "Secrets and Env Vars",
      "zh": "Secrets（技术术语）与EnvVars（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1041,
      "y": 2895,
      "w": 227,
      "h": 49
    },
    {
      "id": "HMNhzzV6ApTKj4I_FOmUB",
      "label": "Caching Dependencies",
      "zh": "缓存Dependencies",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1041,
      "y": 2948,
      "w": 227,
      "h": 49
    },
    {
      "id": "alysXC4b1hGi9ZdQ5-40y",
      "label": "Storing Artifacts",
      "zh": "Storing Artifacts（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1041,
      "y": 3001,
      "w": 227,
      "h": 49
    },
    {
      "id": "jc4R1zhd1YeCEbVuxwJWy",
      "label": "Workflow Status",
      "zh": "Workflow状态",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1041,
      "y": 3054,
      "w": 227,
      "h": 49
    },
    {
      "id": "SsogoCgJIbeTD6tk8UhTe",
      "label": "Marketplace Actions",
      "zh": "Marketplace Actions（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1041,
      "y": 3107,
      "w": 227,
      "h": 49
    },
    {
      "id": "PUnYNBrAZWoZiopjtNgnA",
      "label": "Usecases",
      "zh": "Usecases（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 782,
      "y": 2596,
      "w": 172,
      "h": 49
    },
    {
      "id": "Ni3HKVLanFvSrJ3u8i5I1",
      "label": "What are these?",
      "zh": "什么是these?（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 782,
      "y": 2543,
      "w": 172,
      "h": 49
    },
    {
      "id": "Y0EWgPsS4kZxH3y53jNxY",
      "label": "Use in Automation",
      "zh": "Use in Automation（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 206,
      "y": 2978,
      "w": 244,
      "h": 49
    },
    {
      "id": "sFf1PdFfmEdQxsEntfeFq",
      "label": "Git Patch",
      "zh": "Git Patch（Git 命令）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 396,
      "y": 2465,
      "w": 125,
      "h": 49
    },
    {
      "id": "hru0sL1-D4bJSQI1efEyU",
      "label": "Git Reflog",
      "zh": "Git Reflog（Git 命令）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 479,
      "y": 2763,
      "w": 155,
      "h": 49
    },
    {
      "id": "ExXuwTQSI_lg4SRGW3Iu1",
      "label": "Git Bisect",
      "zh": "Git Bisect（Git 命令）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 479,
      "y": 2816,
      "w": 155,
      "h": 49
    },
    {
      "id": "4dxVN81rXWn6VZqK99yq0",
      "label": "Git Worktree",
      "zh": "Git Worktree（Git 命令）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 479,
      "y": 2869,
      "w": 155,
      "h": 49
    },
    {
      "id": "CGj_UX5JMOOCKinedsNRc",
      "label": "Git Attributes",
      "zh": "Git Attributes（Git 命令）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 479,
      "y": 2922,
      "w": 155,
      "h": 49
    },
    {
      "id": "zdunaucVe8J1tKf_z-NQo",
      "label": "Git LFS",
      "zh": "Git LFS（Git 命令）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 479,
      "y": 2975,
      "w": 156,
      "h": 49
    },
    {
      "id": "NV2HAXLEN7tskfgyFrbaf",
      "label": "GitHub API",
      "zh": "GitHub API（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 479,
      "y": 3197,
      "w": 156,
      "h": 49
    },
    {
      "id": "lSCnKhmRr6xrKVYxO8idD",
      "label": "REST API",
      "zh": "REST API（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 479,
      "y": 3058,
      "w": 156,
      "h": 49
    },
    {
      "id": "KlXPt-K6br8PtpLgELaCj",
      "label": "GraphQL API",
      "zh": "GraphQL API（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 479,
      "y": 3111,
      "w": 156,
      "h": 49
    },
    {
      "id": "5Oax1p7zIZ9HD2hmENPof",
      "label": "Creating Apps",
      "zh": "创建Apps",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 215,
      "y": 3197,
      "w": 156,
      "h": 49
    },
    {
      "id": "560GJXFTt7DPdJjKtSDOo",
      "label": "GitHub Apps",
      "zh": "GitHub Apps（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 216,
      "y": 3059,
      "w": 155,
      "h": 49
    },
    {
      "id": "qrdOARfqGPF9xhF6snbAn",
      "label": "OAuth Apps",
      "zh": "OAuth Apps（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 216,
      "y": 3112,
      "w": 155,
      "h": 49
    },
    {
      "id": "MoG7D9kqPuA6o52-z_WDN",
      "label": "Webhooks",
      "zh": "Webhooks（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1079,
      "y": 3197,
      "w": 156,
      "h": 49
    },
    {
      "id": "vhdGUhMAyre_Xya6IxZ-t",
      "label": "GitHub Sponsors",
      "zh": "GitHub Sponsors（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 450,
      "y": 3511,
      "w": 201,
      "h": 49
    },
    {
      "id": "bnai6R6pOq_L5CPdbVwMW",
      "label": "GitHub Pages",
      "zh": "GitHub Pages（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1089,
      "y": 3377,
      "w": 176,
      "h": 49
    },
    {
      "id": "M2_hBvXou7cCNqsMnexCt",
      "label": "GitHub Gists",
      "zh": "GitHub Gists（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 450,
      "y": 3299,
      "w": 201,
      "h": 49
    },
    {
      "id": "rqPCHh25xX_ROMr-ULpaw",
      "label": "GitHub Packages",
      "zh": "GitHub Packages（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 450,
      "y": 3352,
      "w": 201,
      "h": 49
    },
    {
      "id": "ZHplGidvhxEIC3HN8KqRa",
      "label": "Deploying Static Websites",
      "zh": "Deploying静态Websites",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1021,
      "y": 3274,
      "w": 245,
      "h": 49
    },
    {
      "id": "VdoxEWaU56-QCbHFRw649",
      "label": "Custom Domains",
      "zh": "Custom Domains（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1022,
      "y": 3486,
      "w": 244,
      "h": 49
    },
    {
      "id": "iwfNYDlAgbA_rpWYcoHCC",
      "label": "Static Site Generators",
      "zh": "静态SiteGenerators",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1022,
      "y": 3539,
      "w": 244,
      "h": 49
    },
    {
      "id": "NdfwgwMOewiyEAFyC2l7U",
      "label": "GitHub Codespaces",
      "zh": "GitHub Codespaces（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 450,
      "y": 3405,
      "w": 201,
      "h": 49
    },
    {
      "id": "pFyMiyNQ16-kP7jKaKKEU",
      "label": "GitHub Education",
      "zh": "GitHub Education（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 206,
      "y": 3457,
      "w": 239,
      "h": 49
    },
    {
      "id": "XRSVRl6iHncMmgSXoB7Lq",
      "label": "Student Developer Pack",
      "zh": "Student Developer Pack（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 206,
      "y": 3574,
      "w": 239,
      "h": 49
    },
    {
      "id": "Pg6G4fzYb_RUhANeRKlRX",
      "label": "GitHub Classroom",
      "zh": "GitHub Classroom（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 206,
      "y": 3627,
      "w": 239,
      "h": 49
    },
    {
      "id": "B1KiSOt2b8t8FYD7Jxw2A",
      "label": "Campus Program",
      "zh": "Campus Program（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 206,
      "y": 3679,
      "w": 239,
      "h": 49
    },
    {
      "id": "R20LXLLEzNn-SpyFDMRXj",
      "label": "GitHub Marketplace",
      "zh": "GitHub Marketplace（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 206,
      "y": 3403,
      "w": 239,
      "h": 49
    },
    {
      "id": "f2PG4t6iVtfIH8BVe5H7f",
      "label": "GitHub Security",
      "zh": "GitHub安全",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 450,
      "y": 3458,
      "w": 201,
      "h": 49
    },
    {
      "id": "4slyjdk2Eeg5VYY6gCDG6",
      "label": "GitHub Models",
      "zh": "GitHub Models（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 206,
      "y": 3351,
      "w": 239,
      "h": 49
    },
    {
      "id": "iWn3zDMOfLLjSp6f1jQoE",
      "label": "GitHub Copilot",
      "zh": "GitHub Copilot（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 206,
      "y": 3298,
      "w": 239,
      "h": 49
    },
    {
      "id": "Ddkss13_qDJTquDHbVTVs",
      "label": "CITATION files",
      "zh": "CITATION files（技术术语）",
      "desc": "Git & GitHub 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1068,
      "y": 1265,
      "w": 196,
      "h": 49
    }
  ],
  "tutorials": {
    "HlUUGj3dOZ68t4gIjerXh": {
      "id": "HlUUGj3dOZ68t4gIjerXh",
      "zh": "基础知识",
      "en": "Learn the Basics",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「基础知识」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**基础知识**（Learn the Basics）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「基础知识」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**基础知识**（Learn the Basics）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "bY6b1GV2XQQ52NOx8gWFj": {
      "id": "bY6b1GV2XQQ52NOx8gWFj",
      "zh": "什么是版本控制",
      "en": "What is Version Control?",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「什么是版本控制」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**什么是版本控制**（What is Version Control?）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「什么是版本控制」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**什么是版本控制**（What is Version Control?）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "dhIx1GnynvbSUriqYLUt0": {
      "id": "dhIx1GnynvbSUriqYLUt0",
      "zh": "为什么需要版本控制",
      "en": "Why use Version Control?",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「为什么需要版本控制」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**为什么需要版本控制**（Why use Version Control?）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「为什么需要版本控制」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**为什么需要版本控制**（Why use Version Control?）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "_jSTrYN9G8EsGHkbusKPU": {
      "id": "_jSTrYN9G8EsGHkbusKPU",
      "zh": "Git 与其他 VCS 对比",
      "en": "Git vs Other VCS",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Git 与其他 VCS 对比」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Git 与其他 VCS 对比**（Git vs Other VCS）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Git 与其他 VCS 对比」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Git 与其他 VCS 对比**（Git vs Other VCS）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "v7hCNbgPByi3YiLSs46BK": {
      "id": "v7hCNbgPByi3YiLSs46BK",
      "zh": "安装GitLocally（Git命令）",
      "en": "Installing Git Locally",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「安装GitLocally（Git命令）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**安装GitLocally（Git命令）**（Installing Git Locally）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「安装GitLocally（Git命令）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**安装GitLocally（Git命令）**（Installing Git Locally）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "PtU5Qwfzn3N1i3oRlCGoR": {
      "id": "PtU5Qwfzn3N1i3oRlCGoR",
      "zh": "什么是仓库",
      "en": "What is a Repository",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「什么是仓库」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**什么是仓库**（What is a Repository）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「什么是仓库」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**什么是仓库**（What is a Repository）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "1iOkbO5juk2LO-WZHx_W6": {
      "id": "1iOkbO5juk2LO-WZHx_W6",
      "zh": "git init（初始化仓库）",
      "en": "git init",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「git init（初始化仓库）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**git init（初始化仓库）**（git init）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「git init（初始化仓库）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**git init（初始化仓库）**（git init）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "NMCWgzhhfUvFOMO5GbF_u": {
      "id": "NMCWgzhhfUvFOMO5GbF_u",
      "zh": "git config（配置 Git）",
      "en": "git config",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「git config（配置 Git）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**git config（配置 Git）**（git config）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「git config（配置 Git）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**git config（配置 Git）**（git config）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "tVvxC5JQgUb_B8kOqYpD8": {
      "id": "tVvxC5JQgUb_B8kOqYpD8",
      "zh": "本地与全局配置",
      "en": "Local vs Global Config",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「本地与全局配置」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**本地与全局配置**（Local vs Global Config）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「本地与全局配置」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**本地与全局配置**（Local vs Global Config）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "Sv36oxTZwlUv-i1K28NeP": {
      "id": "Sv36oxTZwlUv-i1K28NeP",
      "zh": "工作区",
      "en": "Working Directory",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「工作区」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**工作区**（Working Directory）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「工作区」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**工作区**（Working Directory）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "h71Tx3nkfUrnhaqcHlDkQ": {
      "id": "h71Tx3nkfUrnhaqcHlDkQ",
      "zh": "暂存区",
      "en": "Staging Area",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「暂存区」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**暂存区**（Staging Area）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**暂存区**（Staging Area）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "2_z3R7seCvQVj-Na4H1SV": {
      "id": "2_z3R7seCvQVj-Na4H1SV",
      "zh": "提交变更",
      "en": "Committing Changes",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「提交变更」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**提交变更**（Committing Changes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**提交变更**（Committing Changes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "oz2oRAhaEQb0Fm3aRJQG8": {
      "id": "oz2oRAhaEQb0Fm3aRJQG8",
      "zh": ".gitignore 忽略规则",
      "en": ".gitignore",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「.gitignore 忽略规则」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**.gitignore 忽略规则**（.gitignore）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「.gitignore 忽略规则」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**.gitignore 忽略规则**（.gitignore）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "IfUm5D_zNaUKMd4HX4Fi4": {
      "id": "IfUm5D_zNaUKMd4HX4Fi4",
      "zh": "查看提交历史",
      "en": "Viewing Commit History",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「查看提交历史」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**查看提交历史**（Viewing Commit History）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**查看提交历史**（Viewing Commit History）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "bXfCUG3h1TIFPgD4WUDph": {
      "id": "bXfCUG3h1TIFPgD4WUDph",
      "zh": "分支基础",
      "en": "Branching Basics",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「分支基础」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**分支基础**（Branching Basics）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**分支基础**（Branching Basics）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "OegitQ5Ngjvd3ZfMpfrkM": {
      "id": "OegitQ5Ngjvd3ZfMpfrkM",
      "zh": "创建分支",
      "en": "Creating Branch",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「创建分支」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**创建分支**（Creating Branch）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**创建分支**（Creating Branch）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "_dPOVUbxApx0pfKPH8fgr": {
      "id": "_dPOVUbxApx0pfKPH8fgr",
      "zh": "重命名分支",
      "en": "Renaming Branch",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「重命名分支」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**重命名分支**（Renaming Branch）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**重命名分支**（Renaming Branch）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "1uDenoQ6zu7CT69FR2iQB": {
      "id": "1uDenoQ6zu7CT69FR2iQB",
      "zh": "删除分支",
      "en": "Deleting Branch",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「删除分支」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**删除分支**（Deleting Branch）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**删除分支**（Deleting Branch）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "PtRo-wGiNAagZ6CykfvMr": {
      "id": "PtRo-wGiNAagZ6CykfvMr",
      "zh": "切换分支",
      "en": "Checkout Branch",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「切换分支」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**切换分支**（Checkout Branch）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**切换分支**（Checkout Branch）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "sNuy6NMjLOEkJlqdEjFPq": {
      "id": "sNuy6NMjLOEkJlqdEjFPq",
      "zh": "Merging（技术术语）基础",
      "en": "Merging Basics",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Merging（技术术语）基础」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Merging（技术术语）基础**（Merging Basics）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Merging（技术术语）基础」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Merging（技术术语）基础**（Merging Basics）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "NeSvgS2yA5x8qbcJHrV__": {
      "id": "NeSvgS2yA5x8qbcJHrV__",
      "zh": "GitHub 基础",
      "en": "GitHub Essentials",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub 基础」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**GitHub 基础**（GitHub Essentials）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitHub 基础」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitHub 基础**（GitHub Essentials）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "i7fIIHcBEk473te8bniJ5": {
      "id": "i7fIIHcBEk473te8bniJ5",
      "zh": "创建Account",
      "en": "Creating Account",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「创建Account」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**创建Account**（Creating Account）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「创建Account」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**创建Account**（Creating Account）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "qZFtRABvlBbVvsy6T00J2": {
      "id": "qZFtRABvlBbVvsy6T00J2",
      "zh": "GitHub接口",
      "en": "GitHub Interface",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub接口」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**GitHub接口**（GitHub Interface）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitHub接口」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitHub接口**（GitHub Interface）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "GS3f1FKFVKT0-GJQrgCm8": {
      "id": "GS3f1FKFVKT0-GJQrgCm8",
      "zh": "搭建剖析",
      "en": "Setting up Profile",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「搭建剖析」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**搭建剖析**（Setting up Profile）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「搭建剖析」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**搭建剖析**（Setting up Profile）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "c_FO6xMixrrMo6iisfsvl": {
      "id": "c_FO6xMixrrMo6iisfsvl",
      "zh": "创建Repositories",
      "en": "Creating Repositories",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「创建Repositories」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**创建Repositories**（Creating Repositories）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「创建Repositories」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**创建Repositories**（Creating Repositories）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "KbVvFVQ4k77R2_ddsc7WT": {
      "id": "KbVvFVQ4k77R2_ddsc7WT",
      "zh": "剖析Readme",
      "en": "Profile Readme",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「剖析Readme」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**剖析Readme**（Profile Readme）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「剖析Readme」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**剖析Readme**（Profile Readme）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "HEqBbw_A4ZbJI5zEy8ViN": {
      "id": "HEqBbw_A4ZbJI5zEy8ViN",
      "zh": "Private（技术术语）与Public（技术术语）对比",
      "en": "Private vs Public",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Private（技术术语）与Public（技术术语）对比」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Private（技术术语）与Public（技术术语）对比**（Private vs Public）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Private（技术术语）与Public（技术术语）对比」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Private（技术术语）与Public（技术术语）对比**（Private vs Public）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "aWx9WHUrgofcTr8B-fQYe": {
      "id": "aWx9WHUrgofcTr8B-fQYe",
      "zh": "Git 远程仓库",
      "en": "Git Remotes",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Git 远程仓库」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Git 远程仓库**（Git Remotes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Git 远程仓库**（Git Remotes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "sBQOInoFBU9XfkPZ-JlyT": {
      "id": "sBQOInoFBU9XfkPZ-JlyT",
      "zh": "管理远程",
      "en": "Managing Remotes",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「管理远程」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**管理远程**（Managing Remotes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**管理远程**（Managing Remotes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "ZVMCh9om37ee1qsecFa-N": {
      "id": "ZVMCh9om37ee1qsecFa-N",
      "zh": "推送与拉取变更",
      "en": "Pushing / Pulling Changes",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「推送与拉取变更」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**推送与拉取变更**（Pushing / Pulling Changes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**推送与拉取变更**（Pushing / Pulling Changes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "Gybnekbd1rJKTOf4hJ4Sh": {
      "id": "Gybnekbd1rJKTOf4hJ4Sh",
      "zh": "fetch 不自动合并",
      "en": "Fetch without Merge",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「fetch 不自动合并」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**fetch 不自动合并**（Fetch without Merge）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**fetch 不自动合并**（Fetch without Merge）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "d_GNnB6PBINz1jxGNWAE-": {
      "id": "d_GNnB6PBINz1jxGNWAE-",
      "zh": "Collaboration on GitHub（技术术语）",
      "en": "Collaboration on GitHub",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Collaboration on GitHub（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Collaboration on GitHub（技术术语）**（Collaboration on GitHub）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Collaboration on GitHub（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Collaboration on GitHub（技术术语）**（Collaboration on GitHub）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "l1Wf7Pe_ah8ycCgslfSK4": {
      "id": "l1Wf7Pe_ah8ycCgslfSK4",
      "zh": "Forking（技术术语）与克隆对比",
      "en": "Forking vs Cloning",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Forking（技术术语）与克隆对比」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Forking（技术术语）与克隆对比**（Forking vs Cloning）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Forking（技术术语）与克隆对比」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Forking（技术术语）与克隆对比**（Forking vs Cloning）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "crdllx5cH_seIpgVPvHg_": {
      "id": "crdllx5cH_seIpgVPvHg_",
      "zh": "Issues（技术术语）",
      "en": "Issues",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Issues（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Issues（技术术语）**（Issues）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Issues（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Issues（技术术语）**（Issues）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "1Koej79yTv-OAswVZwgGq": {
      "id": "1Koej79yTv-OAswVZwgGq",
      "zh": "克隆仓库",
      "en": "Cloning Repositories",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「克隆仓库」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**克隆仓库**（Cloning Repositories）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「克隆仓库」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**克隆仓库**（Cloning Repositories）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "x6eILrLCQrVpz4j8uOuy6": {
      "id": "x6eILrLCQrVpz4j8uOuy6",
      "zh": "拉取Requests",
      "en": "Pull Requests",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「拉取Requests」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**拉取Requests**（Pull Requests）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**拉取Requests**（Pull Requests）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "8lXXVFkgK6n5IHaYkYe3l": {
      "id": "8lXXVFkgK6n5IHaYkYe3l",
      "zh": "PRFROM 指定表aFork",
      "en": "PR from a Fork",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「PRFROM 指定表aFork」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**PRFROM 指定表aFork**（PR from a Fork）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「PRFROM 指定表aFork」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**PRFROM 指定表aFork**（PR from a Fork）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "r-u1vTpUyuvsB0revOU0C": {
      "id": "r-u1vTpUyuvsB0revOU0C",
      "zh": "Collaborators（技术术语）",
      "en": "Collaborators",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Collaborators（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Collaborators（技术术语）**（Collaborators）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Collaborators（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Collaborators（技术术语）**（Collaborators）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "y4DkB5NvTh41IeT0G2gr-": {
      "id": "y4DkB5NvTh41IeT0G2gr-",
      "zh": "Labelling Issues / PRs（技术术语）",
      "en": "Labelling Issues / PRs",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Labelling Issues / PRs（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Labelling Issues / PRs（技术术语）**（Labelling Issues / PRs）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Labelling Issues / PRs（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Labelling Issues / PRs（技术术语）**（Labelling Issues / PRs）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "dQS1V0zZxeKhHhUo3STBK": {
      "id": "dQS1V0zZxeKhHhUo3STBK",
      "zh": "Saved Replies（技术术语）",
      "en": "Saved Replies",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Saved Replies（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Saved Replies（技术术语）**（Saved Replies）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Saved Replies（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Saved Replies（技术术语）**（Saved Replies）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "oWMaOWU06juoIuzXNe-wt": {
      "id": "oWMaOWU06juoIuzXNe-wt",
      "zh": "Mentions（技术术语）",
      "en": "Mentions",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Mentions（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Mentions（技术术语）**（Mentions）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Mentions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Mentions（技术术语）**（Mentions）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "XstmIysIi_lWo6RzszLBt": {
      "id": "XstmIysIi_lWo6RzszLBt",
      "zh": "Reactions（技术术语）",
      "en": "Reactions",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Reactions（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Reactions（技术术语）**（Reactions）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Reactions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Reactions（技术术语）**（Reactions）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "0rHDUbAdXqH9zQW2VfJ8v": {
      "id": "0rHDUbAdXqH9zQW2VfJ8v",
      "zh": "合并Strategies",
      "en": "Merge Strategies",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「合并Strategies」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**合并Strategies**（Merge Strategies）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**合并Strategies**（Merge Strategies）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "agtPWS8j6i6wQPk10cy8E": {
      "id": "agtPWS8j6i6wQPk10cy8E",
      "zh": "Fast-Forward（技术术语）与Non-FF（技术术语）对比",
      "en": "Fast-Forward vs Non-FF",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Fast-Forward（技术术语）与Non-FF（技术术语）对比」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Fast-Forward（技术术语）与Non-FF（技术术语）对比**（Fast-Forward vs Non-FF）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Fast-Forward（技术术语）与Non-FF（技术术语）对比」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Fast-Forward（技术术语）与Non-FF（技术术语）对比**（Fast-Forward vs Non-FF）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "9Dt4Gyiiq5jteWSKxsRMK": {
      "id": "9Dt4Gyiiq5jteWSKxsRMK",
      "zh": "处理Conflicts",
      "en": "Handling Conflicts",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「处理Conflicts」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**处理Conflicts**（Handling Conflicts）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「处理Conflicts」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**处理Conflicts**（Handling Conflicts）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "99FVJ3Zs8n6lr8L95mG6g": {
      "id": "99FVJ3Zs8n6lr8L95mG6g",
      "zh": "Rebase（技术术语）",
      "en": "Rebase",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Rebase（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Rebase（技术术语）**（Rebase）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Rebase（技术术语）**（Rebase）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "Z-srOhYFGVEKDexlJ6cjt": {
      "id": "Z-srOhYFGVEKDexlJ6cjt",
      "zh": "Squash（技术术语）",
      "en": "Squash",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Squash（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Squash（技术术语）**（Squash）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Squash（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Squash（技术术语）**（Squash）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "eFf2fesrs-1aVM5tH3ORQ": {
      "id": "eFf2fesrs-1aVM5tH3ORQ",
      "zh": "Cherry Picking Commits（技术术语）",
      "en": "Cherry Picking Commits",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Cherry Picking Commits（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Cherry Picking Commits（技术术语）**（Cherry Picking Commits）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Cherry Picking Commits（技术术语）**（Cherry Picking Commits）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "7lRUYWNSpHvJ-QyIE8RMa": {
      "id": "7lRUYWNSpHvJ-QyIE8RMa",
      "zh": "COMMIT 提交Messages",
      "en": "Commit Messages",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「COMMIT 提交Messages」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**COMMIT 提交Messages**（Commit Messages）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**COMMIT 提交Messages**（Commit Messages）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "ks1Pip-RM-UWD6zuF2j4n": {
      "id": "ks1Pip-RM-UWD6zuF2j4n",
      "zh": "分支Naming",
      "en": "Branch Naming",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「分支Naming」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**分支Naming**（Branch Naming）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**分支Naming**（Branch Naming）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "GwDNk2HBjASr_NWIL4G3-": {
      "id": "GwDNk2HBjASr_NWIL4G3-",
      "zh": "PR Guidelines（技术术语）",
      "en": "PR Guidelines",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「PR Guidelines（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**PR Guidelines（技术术语）**（PR Guidelines）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「PR Guidelines（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**PR Guidelines（技术术语）**（PR Guidelines）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "xLB2fhsOm0Vu3xg_PusJB": {
      "id": "xLB2fhsOm0Vu3xg_PusJB",
      "zh": "代码Reviews",
      "en": "Code Reviews",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「代码Reviews」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**代码Reviews**（Code Reviews）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「代码Reviews」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**代码Reviews**（Code Reviews）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "pJ-najh7dXhhYA_0bDiR5": {
      "id": "pJ-najh7dXhhYA_0bDiR5",
      "zh": "Contribution Guidelines（技术术语）",
      "en": "Contribution Guidelines",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Contribution Guidelines（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Contribution Guidelines（技术术语）**（Contribution Guidelines）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Contribution Guidelines（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Contribution Guidelines（技术术语）**（Contribution Guidelines）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "D2WIExwfSnkAPIa5O-Hp5": {
      "id": "D2WIExwfSnkAPIa5O-Hp5",
      "zh": "文档",
      "en": "Documentation",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「文档」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**文档**（Documentation）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「文档」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**文档**（Documentation）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "1Ulxl4VUvRSfyCPpi-iv8": {
      "id": "1Ulxl4VUvRSfyCPpi-iv8",
      "zh": "Markdown（技术术语）",
      "en": "Markdown",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Markdown（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Markdown（技术术语）**（Markdown）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Markdown（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Markdown（技术术语）**（Markdown）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "WIVr7JxO1AJTNObW8mtY3": {
      "id": "WIVr7JxO1AJTNObW8mtY3",
      "zh": "Project Readme（技术术语）",
      "en": "Project Readme",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Project Readme（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Project Readme（技术术语）**（Project Readme）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Project Readme（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Project Readme（技术术语）**（Project Readme）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "lONqOqD-4slxa9B5i9ADX": {
      "id": "lONqOqD-4slxa9B5i9ADX",
      "zh": "GitHub Wikis（技术术语）",
      "en": "GitHub Wikis",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub Wikis（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**GitHub Wikis（技术术语）**（GitHub Wikis）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitHub Wikis（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitHub Wikis（技术术语）**（GitHub Wikis）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "i3AbARgzQtxtlB-1AS8zv": {
      "id": "i3AbARgzQtxtlB-1AS8zv",
      "zh": "CleanGit历史",
      "en": "Clean Git History",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「CleanGit历史」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**CleanGit历史**（Clean Git History）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「CleanGit历史」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**CleanGit历史**（Clean Git History）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "yMx3LdadPz4g25CL3N8da": {
      "id": "yMx3LdadPz4g25CL3N8da",
      "zh": "工作inaTeam",
      "en": "Working in a Team",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「工作inaTeam」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**工作inaTeam**（Working in a Team）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「工作inaTeam」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**工作inaTeam**（Working in a Team）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "RMrxQLhrINO5g4Mhxh5qS": {
      "id": "RMrxQLhrINO5g4Mhxh5qS",
      "zh": "GitHub Organizations（技术术语）",
      "en": "GitHub Organizations",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub Organizations（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**GitHub Organizations（技术术语）**（GitHub Organizations）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitHub Organizations（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitHub Organizations（技术术语）**（GitHub Organizations）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "_ft-uvXt6s_xrcMT3fbSF": {
      "id": "_ft-uvXt6s_xrcMT3fbSF",
      "zh": "Collaborators / Members（技术术语）",
      "en": "Collaborators / Members",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Collaborators / Members（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Collaborators / Members（技术术语）**（Collaborators / Members）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Collaborators / Members（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Collaborators / Members（技术术语）**（Collaborators / Members）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "wydgCxR5VnieBpRolXt8i": {
      "id": "wydgCxR5VnieBpRolXt8i",
      "zh": "Teams within Organization（技术术语）",
      "en": "Teams within Organization",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Teams within Organization（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Teams within Organization（技术术语）**（Teams within Organization）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Teams within Organization（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Teams within Organization（技术术语）**（Teams within Organization）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "DzFJDdqnSy5GeGHWOpcVo": {
      "id": "DzFJDdqnSy5GeGHWOpcVo",
      "zh": "GitHub Projects（技术术语）",
      "en": "GitHub Projects",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub Projects（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**GitHub Projects（技术术语）**（GitHub Projects）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitHub Projects（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitHub Projects（技术术语）**（GitHub Projects）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "q0zy_hXav5iXw8LpGVJVd": {
      "id": "q0zy_hXav5iXw8LpGVJVd",
      "zh": "Project Planning（技术术语）",
      "en": "Project Planning",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Project Planning（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Project Planning（技术术语）**（Project Planning）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Project Planning（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Project Planning（技术术语）**（Project Planning）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "RFJgfuxoVxt22QlwLI5mW": {
      "id": "RFJgfuxoVxt22QlwLI5mW",
      "zh": "Kanban Boards（技术术语）",
      "en": "Kanban Boards",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Kanban Boards（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Kanban Boards（技术术语）**（Kanban Boards）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Kanban Boards（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Kanban Boards（技术术语）**（Kanban Boards）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "sxvT2hGko2PDRBoBrCGWD": {
      "id": "sxvT2hGko2PDRBoBrCGWD",
      "zh": "路线",
      "en": "Roadmaps",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「路线」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**路线**（Roadmaps）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「路线」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**路线**（Roadmaps）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "TNBz5755PhI6iKxTQTqcS": {
      "id": "TNBz5755PhI6iKxTQTqcS",
      "zh": "Automations（技术术语）",
      "en": "Automations",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Automations（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Automations（技术术语）**（Automations）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Automations（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Automations（技术术语）**（Automations）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "snWQHCQECZyUXHdn6ppIk": {
      "id": "snWQHCQECZyUXHdn6ppIk",
      "zh": "GitHub Discussions（技术术语）",
      "en": "GitHub Discussions",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub Discussions（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**GitHub Discussions（技术术语）**（GitHub Discussions）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitHub Discussions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitHub Discussions（技术术语）**（GitHub Discussions）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "X9K3PBpGsMoXkJsKdJPI7": {
      "id": "X9K3PBpGsMoXkJsKdJPI7",
      "zh": "Git Stash Basics（Git 命令）",
      "en": "Git Stash Basics",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Git Stash Basics（Git 命令）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Git Stash Basics（Git 命令）**（Git Stash Basics）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Git Stash Basics（Git 命令）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Git Stash Basics（Git 命令）**（Git Stash Basics）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "zen3RRdK9_nPAYgicRoHk": {
      "id": "zen3RRdK9_nPAYgicRoHk",
      "zh": "历史",
      "en": "History",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「历史」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**历史**（History）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「历史」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**历史**（History）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "lXC07j6dOa3rQixY1P-Ob": {
      "id": "lXC07j6dOa3rQixY1P-Ob",
      "zh": "Linear（技术术语）与Non-Linear（技术术语）对比",
      "en": "Linear vs Non-Linear",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Linear（技术术语）与Non-Linear（技术术语）对比」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Linear（技术术语）与Non-Linear（技术术语）对比**（Linear vs Non-Linear）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Linear（技术术语）与Non-Linear（技术术语）对比」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Linear（技术术语）与Non-Linear（技术术语）对比**（Linear vs Non-Linear）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "V8nLIvddyOKTzEjOJX5GW": {
      "id": "V8nLIvddyOKTzEjOJX5GW",
      "zh": "HEAD（技术术语）",
      "en": "HEAD",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「HEAD（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**HEAD（技术术语）**（HEAD）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「HEAD（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**HEAD（技术术语）**（HEAD）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "0cLf7FiI9CX--UX45sm2f": {
      "id": "0cLf7FiI9CX--UX45sm2f",
      "zh": "Detached HEAD（技术术语）",
      "en": "Detached HEAD",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Detached HEAD（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Detached HEAD（技术术语）**（Detached HEAD）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Detached HEAD（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Detached HEAD（技术术语）**（Detached HEAD）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "qFEonbCMLri8iA0yONwuf": {
      "id": "qFEonbCMLri8iA0yONwuf",
      "zh": "git log options（Git 命令）",
      "en": "git log options",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「git log options（Git 命令）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**git log options（Git 命令）**（git log options）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「git log options（Git 命令）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**git log options（Git 命令）**（git log options）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "0Yi4cryT2v2SGBjouOas3": {
      "id": "0Yi4cryT2v2SGBjouOas3",
      "zh": "Undoing变更",
      "en": "Undoing Changes",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Undoing变更」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Undoing变更**（Undoing Changes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Undoing变更」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Undoing变更**（Undoing Changes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "dLr55Om7IOvI53c1DgTKc": {
      "id": "dLr55Om7IOvI53c1DgTKc",
      "zh": "git revert（撤销提交）",
      "en": "git revert",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「git revert（撤销提交）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**git revert（撤销提交）**（git revert）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「git revert（撤销提交）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**git revert（撤销提交）**（git revert）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "igrR7LguU1jemg_mf_AD6": {
      "id": "igrR7LguU1jemg_mf_AD6",
      "zh": "git reset（重置）",
      "en": "git reset",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「git reset（重置）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**git reset（重置）**（git reset）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「git reset（重置）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**git reset（重置）**（git reset）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "Uc7FyfAKpDFRGRNHwztFo": {
      "id": "Uc7FyfAKpDFRGRNHwztFo",
      "zh": "--soft（技术术语）",
      "en": "--soft",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「--soft（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**--soft（技术术语）**（--soft）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「--soft（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**--soft（技术术语）**（--soft）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "V_joZNpQsS9G9PI-o-GmC": {
      "id": "V_joZNpQsS9G9PI-o-GmC",
      "zh": "--hard（技术术语）",
      "en": "--hard",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「--hard（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**--hard（技术术语）**（--hard）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「--hard（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**--hard（技术术语）**（--hard）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "qis7Z5VRxMcOmbesQlegZ": {
      "id": "qis7Z5VRxMcOmbesQlegZ",
      "zh": "--mixed（技术术语）",
      "en": "--mixed",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「--mixed（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**--mixed（技术术语）**（--mixed）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「--mixed（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**--mixed（技术术语）**（--mixed）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "-0zQvCHG8jS_ghSjmTeIx": {
      "id": "-0zQvCHG8jS_ghSjmTeIx",
      "zh": "Viewing Diffs（技术术语）",
      "en": "Viewing Diffs",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Viewing Diffs（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Viewing Diffs（技术术语）**（Viewing Diffs）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Viewing Diffs（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Viewing Diffs（技术术语）**（Viewing Diffs）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "Rwpeltygwzcf6hnuZNURE": {
      "id": "Rwpeltygwzcf6hnuZNURE",
      "zh": "Between Commits（技术术语）",
      "en": "Between Commits",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Between Commits（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Between Commits（技术术语）**（Between Commits）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Between Commits（技术术语）**（Between Commits）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "O-zoAWkDvyn7B8_TmY257": {
      "id": "O-zoAWkDvyn7B8_TmY257",
      "zh": "Between Branches（技术术语）",
      "en": "Between Branches",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Between Branches（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Between Branches（技术术语）**（Between Branches）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Between Branches（技术术语）**（Between Branches）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "mzjtCdpke1ayHcEuS-YUS": {
      "id": "mzjtCdpke1ayHcEuS-YUS",
      "zh": "Staged变更",
      "en": "Staged Changes",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Staged变更」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Staged变更**（Staged Changes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Staged变更」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Staged变更**（Staged Changes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "uxqJzQFRcALqatNRIWR0w": {
      "id": "uxqJzQFRcALqatNRIWR0w",
      "zh": "Unstaged变更",
      "en": "Unstaged Changes",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Unstaged变更」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Unstaged变更**（Unstaged Changes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Unstaged变更」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Unstaged变更**（Unstaged Changes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "sOoC-XxEoIvwKct00oKlX": {
      "id": "sOoC-XxEoIvwKct00oKlX",
      "zh": "Rewriting历史",
      "en": "Rewriting History",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Rewriting历史」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Rewriting历史**（Rewriting History）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Rewriting历史」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Rewriting历史**（Rewriting History）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "NjPnEXLf1Lt9qzgxccogv": {
      "id": "NjPnEXLf1Lt9qzgxccogv",
      "zh": "git commit --amend（Git 命令）",
      "en": "git commit --amend",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「git commit --amend（Git 命令）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**git commit --amend（Git 命令）**（git commit --amend）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**git commit --amend（Git 命令）**（git commit --amend）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "HMEfUFNu_Wp_Pac7VWHr-": {
      "id": "HMEfUFNu_Wp_Pac7VWHr-",
      "zh": "git rebase（变基）",
      "en": "git rebase",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「git rebase（变基）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**git rebase（变基）**（git rebase）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**git rebase（变基）**（git rebase）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "BKVA6Q7DXemAYjyQOA0nh": {
      "id": "BKVA6Q7DXemAYjyQOA0nh",
      "zh": "git filter-branch（Git 命令）",
      "en": "git filter-branch",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「git filter-branch（Git 命令）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**git filter-branch（Git 命令）**（git filter-branch）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**git filter-branch（Git 命令）**（git filter-branch）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "OQOmxg9mCfcjt80hpvXkA": {
      "id": "OQOmxg9mCfcjt80hpvXkA",
      "zh": "git push --force（Git 命令）",
      "en": "git push --force",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「git push --force（Git 命令）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**git push --force（Git 命令）**（git push --force）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**git push --force（Git 命令）**（git push --force）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "iFJBF-EEnLjQVsFSXjo_i": {
      "id": "iFJBF-EEnLjQVsFSXjo_i",
      "zh": "Tagging（技术术语）",
      "en": "Tagging",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Tagging（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Tagging（技术术语）**（Tagging）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Tagging（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Tagging（技术术语）**（Tagging）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "NeU38WPbEphJuJ_AMkH82": {
      "id": "NeU38WPbEphJuJ_AMkH82",
      "zh": "管理Tags",
      "en": "Managing Tags",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「管理Tags」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**管理Tags**（Managing Tags）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「管理Tags」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**管理Tags**（Managing Tags）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "E3HAGNM-kXLL4Oci5JzpQ": {
      "id": "E3HAGNM-kXLL4Oci5JzpQ",
      "zh": "Pushing Tags（技术术语）",
      "en": "Pushing Tags",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Pushing Tags（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Pushing Tags（技术术语）**（Pushing Tags）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Pushing Tags（技术术语）**（Pushing Tags）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "62E1tDMXB6K74OEN0WsS0": {
      "id": "62E1tDMXB6K74OEN0WsS0",
      "zh": "切换Tags",
      "en": "Checkout Tags",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「切换Tags」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**切换Tags**（Checkout Tags）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「切换Tags」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**切换Tags**（Checkout Tags）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "YmnTrjJtqHPXbEVrP8vd7": {
      "id": "YmnTrjJtqHPXbEVrP8vd7",
      "zh": "GitHub Releases（技术术语）",
      "en": "GitHub Releases",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub Releases（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**GitHub Releases（技术术语）**（GitHub Releases）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitHub Releases（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitHub Releases（技术术语）**（GitHub Releases）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "pqBV7BMAs0z6qpfZeW2XP": {
      "id": "pqBV7BMAs0z6qpfZeW2XP",
      "zh": "Git hooks（Git 命令）",
      "en": "Git hooks",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Git hooks（Git 命令）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Git hooks（Git 命令）**（Git hooks）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Git hooks（Git 命令）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Git hooks（Git 命令）**（Git hooks）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "v7uabKuMQPOD_hBIaHOVT": {
      "id": "v7uabKuMQPOD_hBIaHOVT",
      "zh": "什么是与为什么",
      "en": "What and Why?",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「什么是与为什么」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**什么是与为什么**（What and Why?）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「什么是与为什么」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**什么是与为什么**（What and Why?）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "zsU6R2zvJKnYNU2ac4o4p": {
      "id": "zsU6R2zvJKnYNU2ac4o4p",
      "zh": "客户端与服务端Hooks对比",
      "en": "Client vs Server Hooks",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「客户端与服务端Hooks对比」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**客户端与服务端Hooks对比**（Client vs Server Hooks）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「客户端与服务端Hooks对比」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**客户端与服务端Hooks对比**（Client vs Server Hooks）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "jzYjHx-gIKSP8dQUTqWVw": {
      "id": "jzYjHx-gIKSP8dQUTqWVw",
      "zh": "COMMIT 提交-msg",
      "en": "commit-msg",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「COMMIT 提交-msg」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**COMMIT 提交-msg**（commit-msg）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**COMMIT 提交-msg**（commit-msg）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "SANEQI2rgOtsMQyn4qUCq": {
      "id": "SANEQI2rgOtsMQyn4qUCq",
      "zh": "post-切换",
      "en": "post-checkout",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「post-切换」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**post-切换**（post-checkout）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「post-切换」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**post-切换**（post-checkout）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "buxb5TpzQ-xxn0vqtGdS3": {
      "id": "buxb5TpzQ-xxn0vqtGdS3",
      "zh": "post-UPDATE 更新语句",
      "en": "post-update",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「post-UPDATE 更新语句」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**post-UPDATE 更新语句**（post-update）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「post-UPDATE 更新语句」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**post-UPDATE 更新语句**（post-update）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "HhpAIzYMlMiQ9msrYZyDB": {
      "id": "HhpAIzYMlMiQ9msrYZyDB",
      "zh": "pre-COMMIT 提交",
      "en": "pre-commit",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「pre-COMMIT 提交」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**pre-COMMIT 提交**（pre-commit）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**pre-COMMIT 提交**（pre-commit）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "j5kWEUKwBFg5EMm8-61K9": {
      "id": "j5kWEUKwBFg5EMm8-61K9",
      "zh": "pre-推送",
      "en": "pre-push",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「pre-推送」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**pre-推送**（pre-push）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**pre-推送**（pre-push）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "fjAFNjNNbPOzme9Uk_fDV": {
      "id": "fjAFNjNNbPOzme9Uk_fDV",
      "zh": "Submodules（技术术语）",
      "en": "Submodules",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Submodules（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Submodules（技术术语）**（Submodules）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Submodules（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Submodules（技术术语）**（Submodules）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "x4bnsPVTiX2xOCSyrgWpF": {
      "id": "x4bnsPVTiX2xOCSyrgWpF",
      "zh": "Adding / Updating（技术术语）",
      "en": "Adding / Updating",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Adding / Updating（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Adding / Updating（技术术语）**（Adding / Updating）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Adding / Updating（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Adding / Updating（技术术语）**（Adding / Updating）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "d0-u_-_vtPK8tnUpnj_NB": {
      "id": "d0-u_-_vtPK8tnUpnj_NB",
      "zh": "什么是与为什么use?（技术术语）",
      "en": "What and Why use?",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「什么是与为什么use?（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**什么是与为什么use?（技术术语）**（What and Why use?）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「什么是与为什么use?（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**什么是与为什么use?（技术术语）**（What and Why use?）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "h9cf_dh_pwjialOXOlNW-": {
      "id": "h9cf_dh_pwjialOXOlNW-",
      "zh": "GitHub CLI（技术术语）",
      "en": "GitHub CLI",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub CLI（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**GitHub CLI（技术术语）**（GitHub CLI）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitHub CLI（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitHub CLI（技术术语）**（GitHub CLI）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "vHfpoVbOW0DHNtiy0VN4X": {
      "id": "vHfpoVbOW0DHNtiy0VN4X",
      "zh": "安装与配置",
      "en": "Installation and Setup",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「安装与配置」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**安装与配置**（Installation and Setup）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「安装与配置」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**安装与配置**（Installation and Setup）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "lw4zHuhtxIO4kDvbyiVfq": {
      "id": "lw4zHuhtxIO4kDvbyiVfq",
      "zh": "仓库管理",
      "en": "Repository management",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「仓库管理」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**仓库管理**（Repository management）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「仓库管理」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**仓库管理**（Repository management）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "kGnZifvXbHBf5zXIsfAQw": {
      "id": "kGnZifvXbHBf5zXIsfAQw",
      "zh": "Issue管理",
      "en": "Issue Management",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Issue管理」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Issue管理**（Issue Management）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Issue管理」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Issue管理**（Issue Management）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "s3MzDYFPMASqiS8UnvWzW": {
      "id": "s3MzDYFPMASqiS8UnvWzW",
      "zh": "拉取Requests",
      "en": "Pull Requests",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「拉取Requests」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**拉取Requests**（Pull Requests）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**拉取Requests**（Pull Requests）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "AmetdCURXXob5TUsikAab": {
      "id": "AmetdCURXXob5TUsikAab",
      "zh": "GitHub Actions（技术术语）",
      "en": "GitHub Actions",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub Actions（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**GitHub Actions（技术术语）**（GitHub Actions）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
    "p6rq3lQ9YRrTqwcc31O23": {
      "id": "p6rq3lQ9YRrTqwcc31O23",
      "zh": "YAML语法",
      "en": "YAML Syntax",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「YAML语法」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**YAML语法**（YAML Syntax）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「YAML语法」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**YAML语法**（YAML Syntax）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "55uHPFNwYPVZx8Cy3c985": {
      "id": "55uHPFNwYPVZx8Cy3c985",
      "zh": "Workflow Triggers（技术术语）",
      "en": "Workflow Triggers",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Workflow Triggers（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Workflow Triggers（技术术语）**（Workflow Triggers）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Workflow Triggers（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Workflow Triggers（技术术语）**（Workflow Triggers）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "uS1H9KoKGNONvETCuFBbz": {
      "id": "uS1H9KoKGNONvETCuFBbz",
      "zh": "Scheduled Worfklows（技术术语）",
      "en": "Scheduled Worfklows",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Scheduled Worfklows（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Scheduled Worfklows（技术术语）**（Scheduled Worfklows）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Scheduled Worfklows（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Scheduled Worfklows（技术术语）**（Scheduled Worfklows）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "6QwlY3dEvjfAOPALcWKXQ": {
      "id": "6QwlY3dEvjfAOPALcWKXQ",
      "zh": "Workflow Runners（技术术语）",
      "en": "Workflow Runners",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Workflow Runners（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Workflow Runners（技术术语）**（Workflow Runners）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Workflow Runners（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Workflow Runners（技术术语）**（Workflow Runners）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "BnPiTu1Jw2kIW560a2A5T": {
      "id": "BnPiTu1Jw2kIW560a2A5T",
      "zh": "Workflow Context（技术术语）",
      "en": "Workflow Context",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Workflow Context（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Workflow Context（技术术语）**（Workflow Context）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Workflow Context（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Workflow Context（技术术语）**（Workflow Context）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "aflP7oWsQzAr4YPo2LLiQ": {
      "id": "aflP7oWsQzAr4YPo2LLiQ",
      "zh": "Secrets（技术术语）与EnvVars（技术术语）",
      "en": "Secrets and Env Vars",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Secrets（技术术语）与EnvVars（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Secrets（技术术语）与EnvVars（技术术语）**（Secrets and Env Vars）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Secrets（技术术语）与EnvVars（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Secrets（技术术语）与EnvVars（技术术语）**（Secrets and Env Vars）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "HMNhzzV6ApTKj4I_FOmUB": {
      "id": "HMNhzzV6ApTKj4I_FOmUB",
      "zh": "缓存Dependencies",
      "en": "Caching Dependencies",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「缓存Dependencies」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**缓存Dependencies**（Caching Dependencies）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「缓存Dependencies」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**缓存Dependencies**（Caching Dependencies）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "alysXC4b1hGi9ZdQ5-40y": {
      "id": "alysXC4b1hGi9ZdQ5-40y",
      "zh": "Storing Artifacts（技术术语）",
      "en": "Storing Artifacts",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Storing Artifacts（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Storing Artifacts（技术术语）**（Storing Artifacts）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Storing Artifacts（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Storing Artifacts（技术术语）**（Storing Artifacts）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "jc4R1zhd1YeCEbVuxwJWy": {
      "id": "jc4R1zhd1YeCEbVuxwJWy",
      "zh": "Workflow状态",
      "en": "Workflow Status",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Workflow状态」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Workflow状态**（Workflow Status）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Workflow状态**（Workflow Status）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "SsogoCgJIbeTD6tk8UhTe": {
      "id": "SsogoCgJIbeTD6tk8UhTe",
      "zh": "Marketplace Actions（技术术语）",
      "en": "Marketplace Actions",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Marketplace Actions（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Marketplace Actions（技术术语）**（Marketplace Actions）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Marketplace Actions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Marketplace Actions（技术术语）**（Marketplace Actions）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "PUnYNBrAZWoZiopjtNgnA": {
      "id": "PUnYNBrAZWoZiopjtNgnA",
      "zh": "Usecases（技术术语）",
      "en": "Usecases",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Usecases（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Usecases（技术术语）**（Usecases）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Usecases（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Usecases（技术术语）**（Usecases）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "Ni3HKVLanFvSrJ3u8i5I1": {
      "id": "Ni3HKVLanFvSrJ3u8i5I1",
      "zh": "什么是these?（技术术语）",
      "en": "What are these?",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「什么是these?（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**什么是these?（技术术语）**（What are these?）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「什么是these?（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**什么是these?（技术术语）**（What are these?）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "Y0EWgPsS4kZxH3y53jNxY": {
      "id": "Y0EWgPsS4kZxH3y53jNxY",
      "zh": "Use in Automation（技术术语）",
      "en": "Use in Automation",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Use in Automation（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Use in Automation（技术术语）**（Use in Automation）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Use in Automation（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Use in Automation（技术术语）**（Use in Automation）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "sFf1PdFfmEdQxsEntfeFq": {
      "id": "sFf1PdFfmEdQxsEntfeFq",
      "zh": "Git Patch（Git 命令）",
      "en": "Git Patch",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Git Patch（Git 命令）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Git Patch（Git 命令）**（Git Patch）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Git Patch（Git 命令）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Git Patch（Git 命令）**（Git Patch）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "hru0sL1-D4bJSQI1efEyU": {
      "id": "hru0sL1-D4bJSQI1efEyU",
      "zh": "Git Reflog（Git 命令）",
      "en": "Git Reflog",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Git Reflog（Git 命令）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Git Reflog（Git 命令）**（Git Reflog）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Git Reflog（Git 命令）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Git Reflog（Git 命令）**（Git Reflog）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "ExXuwTQSI_lg4SRGW3Iu1": {
      "id": "ExXuwTQSI_lg4SRGW3Iu1",
      "zh": "Git Bisect（Git 命令）",
      "en": "Git Bisect",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Git Bisect（Git 命令）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Git Bisect（Git 命令）**（Git Bisect）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Git Bisect（Git 命令）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Git Bisect（Git 命令）**（Git Bisect）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "4dxVN81rXWn6VZqK99yq0": {
      "id": "4dxVN81rXWn6VZqK99yq0",
      "zh": "Git Worktree（Git 命令）",
      "en": "Git Worktree",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Git Worktree（Git 命令）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Git Worktree（Git 命令）**（Git Worktree）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Git Worktree（Git 命令）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Git Worktree（Git 命令）**（Git Worktree）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "CGj_UX5JMOOCKinedsNRc": {
      "id": "CGj_UX5JMOOCKinedsNRc",
      "zh": "Git Attributes（Git 命令）",
      "en": "Git Attributes",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Git Attributes（Git 命令）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Git Attributes（Git 命令）**（Git Attributes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Git Attributes（Git 命令）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Git Attributes（Git 命令）**（Git Attributes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "zdunaucVe8J1tKf_z-NQo": {
      "id": "zdunaucVe8J1tKf_z-NQo",
      "zh": "Git LFS（Git 命令）",
      "en": "Git LFS",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Git LFS（Git 命令）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Git LFS（Git 命令）**（Git LFS）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Git LFS（Git 命令）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Git LFS（Git 命令）**（Git LFS）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "NV2HAXLEN7tskfgyFrbaf": {
      "id": "NV2HAXLEN7tskfgyFrbaf",
      "zh": "GitHub API（技术术语）",
      "en": "GitHub API",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub API（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**GitHub API（技术术语）**（GitHub API）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitHub API（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitHub API（技术术语）**（GitHub API）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "lSCnKhmRr6xrKVYxO8idD": {
      "id": "lSCnKhmRr6xrKVYxO8idD",
      "zh": "REST API（技术术语）",
      "en": "REST API",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「REST API（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**REST API（技术术语）**（REST API）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「REST API（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**REST API（技术术语）**（REST API）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "KlXPt-K6br8PtpLgELaCj": {
      "id": "KlXPt-K6br8PtpLgELaCj",
      "zh": "GraphQL API（技术术语）",
      "en": "GraphQL API",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GraphQL API（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**GraphQL API（技术术语）**（GraphQL API）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GraphQL API（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GraphQL API（技术术语）**（GraphQL API）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "5Oax1p7zIZ9HD2hmENPof": {
      "id": "5Oax1p7zIZ9HD2hmENPof",
      "zh": "创建Apps",
      "en": "Creating Apps",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「创建Apps」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**创建Apps**（Creating Apps）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「创建Apps」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**创建Apps**（Creating Apps）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "560GJXFTt7DPdJjKtSDOo": {
      "id": "560GJXFTt7DPdJjKtSDOo",
      "zh": "GitHub Apps（技术术语）",
      "en": "GitHub Apps",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub Apps（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**GitHub Apps（技术术语）**（GitHub Apps）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitHub Apps（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitHub Apps（技术术语）**（GitHub Apps）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "qrdOARfqGPF9xhF6snbAn": {
      "id": "qrdOARfqGPF9xhF6snbAn",
      "zh": "OAuth Apps（技术术语）",
      "en": "OAuth Apps",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「OAuth Apps（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**OAuth Apps（技术术语）**（OAuth Apps）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「OAuth Apps（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**OAuth Apps（技术术语）**（OAuth Apps）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "MoG7D9kqPuA6o52-z_WDN": {
      "id": "MoG7D9kqPuA6o52-z_WDN",
      "zh": "Webhooks（技术术语）",
      "en": "Webhooks",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Webhooks（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Webhooks（技术术语）**（Webhooks）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Webhooks（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Webhooks（技术术语）**（Webhooks）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "vhdGUhMAyre_Xya6IxZ-t": {
      "id": "vhdGUhMAyre_Xya6IxZ-t",
      "zh": "GitHub Sponsors（技术术语）",
      "en": "GitHub Sponsors",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub Sponsors（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**GitHub Sponsors（技术术语）**（GitHub Sponsors）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitHub Sponsors（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitHub Sponsors（技术术语）**（GitHub Sponsors）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "bnai6R6pOq_L5CPdbVwMW": {
      "id": "bnai6R6pOq_L5CPdbVwMW",
      "zh": "GitHub Pages（技术术语）",
      "en": "GitHub Pages",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub Pages（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**GitHub Pages（技术术语）**（GitHub Pages）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitHub Pages（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitHub Pages（技术术语）**（GitHub Pages）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "M2_hBvXou7cCNqsMnexCt": {
      "id": "M2_hBvXou7cCNqsMnexCt",
      "zh": "GitHub Gists（技术术语）",
      "en": "GitHub Gists",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub Gists（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**GitHub Gists（技术术语）**（GitHub Gists）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitHub Gists（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitHub Gists（技术术语）**（GitHub Gists）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "rqPCHh25xX_ROMr-ULpaw": {
      "id": "rqPCHh25xX_ROMr-ULpaw",
      "zh": "GitHub Packages（技术术语）",
      "en": "GitHub Packages",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub Packages（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**GitHub Packages（技术术语）**（GitHub Packages）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitHub Packages（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitHub Packages（技术术语）**（GitHub Packages）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "ZHplGidvhxEIC3HN8KqRa": {
      "id": "ZHplGidvhxEIC3HN8KqRa",
      "zh": "Deploying静态Websites",
      "en": "Deploying Static Websites",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Deploying静态Websites」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Deploying静态Websites**（Deploying Static Websites）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Deploying静态Websites」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Deploying静态Websites**（Deploying Static Websites）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "VdoxEWaU56-QCbHFRw649": {
      "id": "VdoxEWaU56-QCbHFRw649",
      "zh": "Custom Domains（技术术语）",
      "en": "Custom Domains",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Custom Domains（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Custom Domains（技术术语）**（Custom Domains）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Custom Domains（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Custom Domains（技术术语）**（Custom Domains）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "iwfNYDlAgbA_rpWYcoHCC": {
      "id": "iwfNYDlAgbA_rpWYcoHCC",
      "zh": "静态SiteGenerators",
      "en": "Static Site Generators",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「静态SiteGenerators」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**静态SiteGenerators**（Static Site Generators）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「静态SiteGenerators」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**静态SiteGenerators**（Static Site Generators）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "NdfwgwMOewiyEAFyC2l7U": {
      "id": "NdfwgwMOewiyEAFyC2l7U",
      "zh": "GitHub Codespaces（技术术语）",
      "en": "GitHub Codespaces",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub Codespaces（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**GitHub Codespaces（技术术语）**（GitHub Codespaces）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitHub Codespaces（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitHub Codespaces（技术术语）**（GitHub Codespaces）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "pFyMiyNQ16-kP7jKaKKEU": {
      "id": "pFyMiyNQ16-kP7jKaKKEU",
      "zh": "GitHub Education（技术术语）",
      "en": "GitHub Education",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub Education（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**GitHub Education（技术术语）**（GitHub Education）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitHub Education（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitHub Education（技术术语）**（GitHub Education）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "XRSVRl6iHncMmgSXoB7Lq": {
      "id": "XRSVRl6iHncMmgSXoB7Lq",
      "zh": "Student Developer Pack（技术术语）",
      "en": "Student Developer Pack",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Student Developer Pack（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Student Developer Pack（技术术语）**（Student Developer Pack）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Student Developer Pack（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Student Developer Pack（技术术语）**（Student Developer Pack）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "Pg6G4fzYb_RUhANeRKlRX": {
      "id": "Pg6G4fzYb_RUhANeRKlRX",
      "zh": "GitHub Classroom（技术术语）",
      "en": "GitHub Classroom",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub Classroom（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**GitHub Classroom（技术术语）**（GitHub Classroom）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitHub Classroom（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitHub Classroom（技术术语）**（GitHub Classroom）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "B1KiSOt2b8t8FYD7Jxw2A": {
      "id": "B1KiSOt2b8t8FYD7Jxw2A",
      "zh": "Campus Program（技术术语）",
      "en": "Campus Program",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Campus Program（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**Campus Program（技术术语）**（Campus Program）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Campus Program（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Campus Program（技术术语）**（Campus Program）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "R20LXLLEzNn-SpyFDMRXj": {
      "id": "R20LXLLEzNn-SpyFDMRXj",
      "zh": "GitHub Marketplace（技术术语）",
      "en": "GitHub Marketplace",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub Marketplace（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**GitHub Marketplace（技术术语）**（GitHub Marketplace）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitHub Marketplace（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitHub Marketplace（技术术语）**（GitHub Marketplace）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "f2PG4t6iVtfIH8BVe5H7f": {
      "id": "f2PG4t6iVtfIH8BVe5H7f",
      "zh": "GitHub安全",
      "en": "GitHub Security",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub安全」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**GitHub安全**（GitHub Security）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitHub安全」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitHub安全**（GitHub Security）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "4slyjdk2Eeg5VYY6gCDG6": {
      "id": "4slyjdk2Eeg5VYY6gCDG6",
      "zh": "GitHub Models（技术术语）",
      "en": "GitHub Models",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub Models（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**GitHub Models（技术术语）**（GitHub Models）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitHub Models（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitHub Models（技术术语）**（GitHub Models）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "iWn3zDMOfLLjSp6f1jQoE": {
      "id": "iWn3zDMOfLLjSp6f1jQoE",
      "zh": "GitHub Copilot（技术术语）",
      "en": "GitHub Copilot",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub Copilot（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**GitHub Copilot（技术术语）**（GitHub Copilot）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitHub Copilot（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitHub Copilot（技术术语）**（GitHub Copilot）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "Ddkss13_qDJTquDHbVTVs": {
      "id": "Ddkss13_qDJTquDHbVTVs",
      "zh": "CITATION files（技术术语）",
      "en": "CITATION files",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「CITATION files（技术术语）」时，先把它放进 Git & GitHub 的真实场景，而不是孤立背术语。",
      "what": "**CITATION files（技术术语）**（CITATION files）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Git & GitHub 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「CITATION files（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**CITATION files（技术术语）**（CITATION files）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    }
  },
  "lessons": {
    "HlUUGj3dOZ68t4gIjerXh": {
      "scene": "学习「基础知识」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "基础知识（Learn the Basics）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「基础知识」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「基础知识」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「基础知识」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "bY6b1GV2XQQ52NOx8gWFj": {
      "scene": "学习「什么是版本控制」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "什么是版本控制（What is Version Control?）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「什么是版本控制」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「什么是版本控制」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「什么是版本控制」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "dhIx1GnynvbSUriqYLUt0": {
      "scene": "学习「为什么需要版本控制」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "为什么需要版本控制（Why use Version Control?）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「为什么需要版本控制」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「为什么需要版本控制」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「为什么需要版本控制」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "_jSTrYN9G8EsGHkbusKPU": {
      "scene": "学习「Git 与其他 VCS 对比」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Git 与其他 VCS 对比（Git vs Other VCS）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Git 与其他 VCS 对比」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「Git 与其他 VCS 对比」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Git 与其他 VCS 对比」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "v7hCNbgPByi3YiLSs46BK": {
      "scene": "学习「安装GitLocally（Git命令）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "安装GitLocally（Git命令）（Installing Git Locally）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「安装GitLocally（Git命令）」出现在哪：上游输入是什么，下游…",
          "text": "「安装GitLocally（Git命令）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「安装GitLocally（Git命令）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "PtU5Qwfzn3N1i3oRlCGoR": {
      "scene": "学习「什么是仓库」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "什么是仓库（What is a Repository）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「什么是仓库」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「什么是仓库」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「什么是仓库」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "1iOkbO5juk2LO-WZHx_W6": {
      "scene": "学习「git init（初始化仓库）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "git init（初始化仓库）（git init）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「git init（初始化仓库）」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「git init（初始化仓库）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「git init（初始化仓库）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "NMCWgzhhfUvFOMO5GbF_u": {
      "scene": "学习「git config（配置 Git）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "git config（配置 Git）（git config）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「git config（配置 Git）」出现在哪：上游输入是什么，下游输…",
          "text": "「git config（配置 Git）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「git config（配置 Git）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "tVvxC5JQgUb_B8kOqYpD8": {
      "scene": "学习「本地与全局配置」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "本地与全局配置（Local vs Global Config）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「本地与全局配置」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「本地与全局配置」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「本地与全局配置」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "Sv36oxTZwlUv-i1K28NeP": {
      "scene": "学习「工作区」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "工作区（Working Directory）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「工作区」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「工作区」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「工作区」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "h71Tx3nkfUrnhaqcHlDkQ": {
      "scene": "学习「暂存区」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "暂存区（Staging Area）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「暂存区」不等于会用。重点看 工作区 → git add → git commit → log/diff 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "2_z3R7seCvQVj-Na4H1SV": {
      "scene": "学习「提交变更」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "提交变更（Committing Changes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「提交变更」不等于会用。重点看 工作区 → git add → git commit → log/diff 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "oz2oRAhaEQb0Fm3aRJQG8": {
      "scene": "学习「.gitignore 忽略规则」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": ".gitignore 忽略规则（.gitignore）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「.gitignore 忽略规则」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「.gitignore 忽略规则」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「.gitignore 忽略规则」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "IfUm5D_zNaUKMd4HX4Fi4": {
      "scene": "学习「查看提交历史」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "查看提交历史（Viewing Commit History）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「查看提交历史」不等于会用。重点看 工作区 → git add → git commit → log/diff 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "bXfCUG3h1TIFPgD4WUDph": {
      "scene": "学习「分支基础」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "分支基础（Branching Basics）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「分支基础」不等于会用。重点看 切分支 → 分支开发 → 合并回主线 → 清理分支 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "OegitQ5Ngjvd3ZfMpfrkM": {
      "scene": "学习「创建分支」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "创建分支（Creating Branch）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「创建分支」不等于会用。重点看 切分支 → 分支开发 → 合并回主线 → 清理分支 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "_dPOVUbxApx0pfKPH8fgr": {
      "scene": "学习「重命名分支」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "重命名分支（Renaming Branch）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「重命名分支」不等于会用。重点看 切分支 → 分支开发 → 合并回主线 → 清理分支 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "1uDenoQ6zu7CT69FR2iQB": {
      "scene": "学习「删除分支」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "删除分支（Deleting Branch）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「删除分支」不等于会用。重点看 切分支 → 分支开发 → 合并回主线 → 清理分支 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "PtRo-wGiNAagZ6CykfvMr": {
      "scene": "学习「切换分支」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "切换分支（Checkout Branch）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「切换分支」不等于会用。重点看 切分支 → 分支开发 → 合并回主线 → 清理分支 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "sNuy6NMjLOEkJlqdEjFPq": {
      "scene": "学习「Merging（技术术语）基础」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Merging（技术术语）基础（Merging Basics）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Merging（技术术语）基础」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「Merging（技术术语）基础」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Merging（技术术语）基础」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "NeSvgS2yA5x8qbcJHrV__": {
      "scene": "学习「GitHub 基础」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitHub 基础（GitHub Essentials）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitHub 基础」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「GitHub 基础」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitHub 基础」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "i7fIIHcBEk473te8bniJ5": {
      "scene": "学习「创建Account」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "创建Account（Creating Account）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「创建Account」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「创建Account」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「创建Account」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "qZFtRABvlBbVvsy6T00J2": {
      "scene": "学习「GitHub接口」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitHub接口（GitHub Interface）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitHub接口」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「GitHub接口」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitHub接口」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "GS3f1FKFVKT0-GJQrgCm8": {
      "scene": "学习「搭建剖析」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "搭建剖析（Setting up Profile）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「搭建剖析」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「搭建剖析」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「搭建剖析」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "c_FO6xMixrrMo6iisfsvl": {
      "scene": "学习「创建Repositories」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "创建Repositories（Creating Repositories）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「创建Repositories」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「创建Repositories」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「创建Repositories」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "KbVvFVQ4k77R2_ddsc7WT": {
      "scene": "学习「剖析Readme」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "剖析Readme（Profile Readme）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「剖析Readme」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「剖析Readme」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「剖析Readme」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "HEqBbw_A4ZbJI5zEy8ViN": {
      "scene": "学习「Private（技术术语）与Public（技术术语）对比」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Private（技术术语）与Public（技术术语）对比（Private vs Public）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Private（技术术语）与Public（技术术语）对比」出现在哪：上…",
          "text": "「Private（技术术语）与Public（技术术语）对比」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Private（技术术语）与Public（技术术语）对比」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "aWx9WHUrgofcTr8B-fQYe": {
      "scene": "学习「Git 远程仓库」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Git 远程仓库（Git Remotes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「Git 远程仓库」不等于会用。重点看 本地 commit → git push → git pull → 处理冲突 这条链路。",
      "experiment": "fork 一个仓库，改 README 后 push；另开目录 clone，在远程改同一行再 pull，亲手解决一次冲突。"
    },
    "sBQOInoFBU9XfkPZ-JlyT": {
      "scene": "学习「管理远程」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "管理远程（Managing Remotes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「管理远程」不等于会用。重点看 本地 commit → git push → git pull → 处理冲突 这条链路。",
      "experiment": "fork 一个仓库，改 README 后 push；另开目录 clone，在远程改同一行再 pull，亲手解决一次冲突。"
    },
    "ZVMCh9om37ee1qsecFa-N": {
      "scene": "学习「推送与拉取变更」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "推送与拉取变更（Pushing / Pulling Changes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「推送与拉取变更」不等于会用。重点看 本地 commit → git push → git pull → 处理冲突 这条链路。",
      "experiment": "fork 一个仓库，改 README 后 push；另开目录 clone，在远程改同一行再 pull，亲手解决一次冲突。"
    },
    "Gybnekbd1rJKTOf4hJ4Sh": {
      "scene": "学习「fetch 不自动合并」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "fetch 不自动合并（Fetch without Merge）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「fetch 不自动合并」不等于会用。重点看 本地 commit → git push → git pull → 处理冲突 这条链路。",
      "experiment": "fork 一个仓库，改 README 后 push；另开目录 clone，在远程改同一行再 pull，亲手解决一次冲突。"
    },
    "d_GNnB6PBINz1jxGNWAE-": {
      "scene": "学习「Collaboration on GitHub（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Collaboration on GitHub（技术术语）（Collaboration on GitHub）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Collaboration on GitHub（技术术语）」出现在哪：…",
          "text": "「Collaboration on GitHub（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Collaboration on GitHub（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "l1Wf7Pe_ah8ycCgslfSK4": {
      "scene": "学习「Forking（技术术语）与克隆对比」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Forking（技术术语）与克隆对比（Forking vs Cloning）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Forking（技术术语）与克隆对比」出现在哪：上游输入是什么，下游输…",
          "text": "「Forking（技术术语）与克隆对比」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Forking（技术术语）与克隆对比」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "crdllx5cH_seIpgVPvHg_": {
      "scene": "学习「Issues（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Issues（技术术语）（Issues）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Issues（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Issues（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Issues（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "1Koej79yTv-OAswVZwgGq": {
      "scene": "学习「克隆仓库」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "克隆仓库（Cloning Repositories）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「克隆仓库」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「克隆仓库」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「克隆仓库」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "x6eILrLCQrVpz4j8uOuy6": {
      "scene": "学习「拉取Requests」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "拉取Requests（Pull Requests）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「拉取Requests」不等于会用。重点看 本地 commit → git push → git pull → 处理冲突 这条链路。",
      "experiment": "fork 一个仓库，改 README 后 push；另开目录 clone，在远程改同一行再 pull，亲手解决一次冲突。"
    },
    "8lXXVFkgK6n5IHaYkYe3l": {
      "scene": "学习「PRFROM 指定表aFork」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "PRFROM 指定表aFork（PR from a Fork）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「PRFROM 指定表aFork」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「PRFROM 指定表aFork」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「PRFROM 指定表aFork」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "r-u1vTpUyuvsB0revOU0C": {
      "scene": "学习「Collaborators（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Collaborators（技术术语）（Collaborators）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Collaborators（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「Collaborators（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Collaborators（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "y4DkB5NvTh41IeT0G2gr-": {
      "scene": "学习「Labelling Issues / PRs（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Labelling Issues / PRs（技术术语）（Labelling Issues / PRs）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Labelling Issues / PRs（技术术语）」出现在哪：上…",
          "text": "「Labelling Issues / PRs（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Labelling Issues / PRs（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "dQS1V0zZxeKhHhUo3STBK": {
      "scene": "学习「Saved Replies（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Saved Replies（技术术语）（Saved Replies）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Saved Replies（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「Saved Replies（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Saved Replies（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "oWMaOWU06juoIuzXNe-wt": {
      "scene": "学习「Mentions（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Mentions（技术术语）（Mentions）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Mentions（技术术语）」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「Mentions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Mentions（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "XstmIysIi_lWo6RzszLBt": {
      "scene": "学习「Reactions（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Reactions（技术术语）（Reactions）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Reactions（技术术语）」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「Reactions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Reactions（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "0rHDUbAdXqH9zQW2VfJ8v": {
      "scene": "学习「合并Strategies」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "合并Strategies（Merge Strategies）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「合并Strategies」不等于会用。重点看 切分支 → 分支开发 → 合并回主线 → 清理分支 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "agtPWS8j6i6wQPk10cy8E": {
      "scene": "学习「Fast-Forward（技术术语）与Non-FF（技术术语）对比」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Fast-Forward（技术术语）与Non-FF（技术术语）对比（Fast-Forward vs Non-FF）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Fast-Forward（技术术语）与Non-FF（技术术语）对比」出…",
          "text": "「Fast-Forward（技术术语）与Non-FF（技术术语）对比」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Fast-Forward（技术术语）与Non-FF（技术术语）对比」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "9Dt4Gyiiq5jteWSKxsRMK": {
      "scene": "学习「处理Conflicts」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "处理Conflicts（Handling Conflicts）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「处理Conflicts」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「处理Conflicts」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「处理Conflicts」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "99FVJ3Zs8n6lr8L95mG6g": {
      "scene": "学习「Rebase（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Rebase（技术术语）（Rebase）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「Rebase（技术术语）」不等于会用。重点看 切分支 → 分支开发 → 合并回主线 → 清理分支 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "Z-srOhYFGVEKDexlJ6cjt": {
      "scene": "学习「Squash（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Squash（技术术语）（Squash）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Squash（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Squash（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Squash（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "eFf2fesrs-1aVM5tH3ORQ": {
      "scene": "学习「Cherry Picking Commits（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Cherry Picking Commits（技术术语）（Cherry Picking Commits）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「Cherry Picking Commits（技术术语）」不等于会用。重点看 工作区 → git add → git commit → log/diff 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "7lRUYWNSpHvJ-QyIE8RMa": {
      "scene": "学习「COMMIT 提交Messages」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "COMMIT 提交Messages（Commit Messages）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「COMMIT 提交Messages」不等于会用。重点看 工作区 → git add → git commit → log/diff 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "ks1Pip-RM-UWD6zuF2j4n": {
      "scene": "学习「分支Naming」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "分支Naming（Branch Naming）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「分支Naming」不等于会用。重点看 切分支 → 分支开发 → 合并回主线 → 清理分支 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "GwDNk2HBjASr_NWIL4G3-": {
      "scene": "学习「PR Guidelines（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "PR Guidelines（技术术语）（PR Guidelines）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「PR Guidelines（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「PR Guidelines（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「PR Guidelines（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "xLB2fhsOm0Vu3xg_PusJB": {
      "scene": "学习「代码Reviews」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "代码Reviews（Code Reviews）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「代码Reviews」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「代码Reviews」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「代码Reviews」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "pJ-najh7dXhhYA_0bDiR5": {
      "scene": "学习「Contribution Guidelines（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Contribution Guidelines（技术术语）（Contribution Guidelines）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Contribution Guidelines（技术术语）」出现在哪：…",
          "text": "「Contribution Guidelines（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Contribution Guidelines（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "D2WIExwfSnkAPIa5O-Hp5": {
      "scene": "学习「文档」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "文档（Documentation）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「文档」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「文档」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「文档」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "1Ulxl4VUvRSfyCPpi-iv8": {
      "scene": "学习「Markdown（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Markdown（技术术语）（Markdown）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Markdown（技术术语）」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「Markdown（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Markdown（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "WIVr7JxO1AJTNObW8mtY3": {
      "scene": "学习「Project Readme（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Project Readme（技术术语）（Project Readme）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Project Readme（技术术语）」出现在哪：上游输入是什么，下…",
          "text": "「Project Readme（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Project Readme（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "lONqOqD-4slxa9B5i9ADX": {
      "scene": "学习「GitHub Wikis（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitHub Wikis（技术术语）（GitHub Wikis）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitHub Wikis（技术术语）」出现在哪：上游输入是什么，下游输…",
          "text": "「GitHub Wikis（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitHub Wikis（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "i3AbARgzQtxtlB-1AS8zv": {
      "scene": "学习「CleanGit历史」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "CleanGit历史（Clean Git History）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「CleanGit历史」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「CleanGit历史」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「CleanGit历史」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "yMx3LdadPz4g25CL3N8da": {
      "scene": "学习「工作inaTeam」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "工作inaTeam（Working in a Team）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「工作inaTeam」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「工作inaTeam」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「工作inaTeam」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "RMrxQLhrINO5g4Mhxh5qS": {
      "scene": "学习「GitHub Organizations（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitHub Organizations（技术术语）（GitHub Organizations）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitHub Organizations（技术术语）」出现在哪：上游输…",
          "text": "「GitHub Organizations（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitHub Organizations（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "_ft-uvXt6s_xrcMT3fbSF": {
      "scene": "学习「Collaborators / Members（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Collaborators / Members（技术术语）（Collaborators / Members）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Collaborators / Members（技术术语）」出现在哪：…",
          "text": "「Collaborators / Members（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Collaborators / Members（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "wydgCxR5VnieBpRolXt8i": {
      "scene": "学习「Teams within Organization（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Teams within Organization（技术术语）（Teams within Organization）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Teams within Organization（技术术语）」出现在…",
          "text": "「Teams within Organization（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Teams within Organization（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "DzFJDdqnSy5GeGHWOpcVo": {
      "scene": "学习「GitHub Projects（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitHub Projects（技术术语）（GitHub Projects）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitHub Projects（技术术语）」出现在哪：上游输入是什么，…",
          "text": "「GitHub Projects（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitHub Projects（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "q0zy_hXav5iXw8LpGVJVd": {
      "scene": "学习「Project Planning（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Project Planning（技术术语）（Project Planning）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Project Planning（技术术语）」出现在哪：上游输入是什么…",
          "text": "「Project Planning（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Project Planning（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "RFJgfuxoVxt22QlwLI5mW": {
      "scene": "学习「Kanban Boards（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Kanban Boards（技术术语）（Kanban Boards）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Kanban Boards（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「Kanban Boards（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Kanban Boards（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "sxvT2hGko2PDRBoBrCGWD": {
      "scene": "学习「路线」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "路线（Roadmaps）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「路线」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「路线」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「路线」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "TNBz5755PhI6iKxTQTqcS": {
      "scene": "学习「Automations（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Automations（技术术语）（Automations）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Automations（技术术语）」出现在哪：上游输入是什么，下游输出…",
          "text": "「Automations（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Automations（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "snWQHCQECZyUXHdn6ppIk": {
      "scene": "学习「GitHub Discussions（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitHub Discussions（技术术语）（GitHub Discussions）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitHub Discussions（技术术语）」出现在哪：上游输入是…",
          "text": "「GitHub Discussions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitHub Discussions（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "X9K3PBpGsMoXkJsKdJPI7": {
      "scene": "学习「Git Stash Basics（Git 命令）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Git Stash Basics（Git 命令）（Git Stash Basics）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Git Stash Basics（Git 命令）」出现在哪：上游输入是…",
          "text": "「Git Stash Basics（Git 命令）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Git Stash Basics（Git 命令）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "zen3RRdK9_nPAYgicRoHk": {
      "scene": "学习「历史」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "历史（History）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「历史」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「历史」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「历史」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "lXC07j6dOa3rQixY1P-Ob": {
      "scene": "学习「Linear（技术术语）与Non-Linear（技术术语）对比」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Linear（技术术语）与Non-Linear（技术术语）对比（Linear vs Non-Linear）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Linear（技术术语）与Non-Linear（技术术语）对比」出现在…",
          "text": "「Linear（技术术语）与Non-Linear（技术术语）对比」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Linear（技术术语）与Non-Linear（技术术语）对比」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "V8nLIvddyOKTzEjOJX5GW": {
      "scene": "学习「HEAD（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "HEAD（技术术语）（HEAD）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「HEAD（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「HEAD（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「HEAD（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "0cLf7FiI9CX--UX45sm2f": {
      "scene": "学习「Detached HEAD（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Detached HEAD（技术术语）（Detached HEAD）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Detached HEAD（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「Detached HEAD（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Detached HEAD（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "qFEonbCMLri8iA0yONwuf": {
      "scene": "学习「git log options（Git 命令）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "git log options（Git 命令）（git log options）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「git log options（Git 命令）」出现在哪：上游输入是什…",
          "text": "「git log options（Git 命令）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「git log options（Git 命令）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "0Yi4cryT2v2SGBjouOas3": {
      "scene": "学习「Undoing变更」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Undoing变更（Undoing Changes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Undoing变更」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Undoing变更」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Undoing变更」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "dLr55Om7IOvI53c1DgTKc": {
      "scene": "学习「git revert（撤销提交）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "git revert（撤销提交）（git revert）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「git revert（撤销提交）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「git revert（撤销提交）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「git revert（撤销提交）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "igrR7LguU1jemg_mf_AD6": {
      "scene": "学习「git reset（重置）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "git reset（重置）（git reset）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「git reset（重置）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「git reset（重置）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「git reset（重置）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "Uc7FyfAKpDFRGRNHwztFo": {
      "scene": "学习「--soft（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "--soft（技术术语）（--soft）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「--soft（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「--soft（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「--soft（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "V_joZNpQsS9G9PI-o-GmC": {
      "scene": "学习「--hard（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "--hard（技术术语）（--hard）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「--hard（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「--hard（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「--hard（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "qis7Z5VRxMcOmbesQlegZ": {
      "scene": "学习「--mixed（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "--mixed（技术术语）（--mixed）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「--mixed（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「--mixed（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「--mixed（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "-0zQvCHG8jS_ghSjmTeIx": {
      "scene": "学习「Viewing Diffs（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Viewing Diffs（技术术语）（Viewing Diffs）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Viewing Diffs（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「Viewing Diffs（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Viewing Diffs（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "Rwpeltygwzcf6hnuZNURE": {
      "scene": "学习「Between Commits（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Between Commits（技术术语）（Between Commits）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「Between Commits（技术术语）」不等于会用。重点看 工作区 → git add → git commit → log/diff 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "O-zoAWkDvyn7B8_TmY257": {
      "scene": "学习「Between Branches（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Between Branches（技术术语）（Between Branches）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「Between Branches（技术术语）」不等于会用。重点看 切分支 → 分支开发 → 合并回主线 → 清理分支 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "mzjtCdpke1ayHcEuS-YUS": {
      "scene": "学习「Staged变更」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Staged变更（Staged Changes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Staged变更」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Staged变更」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Staged变更」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "uxqJzQFRcALqatNRIWR0w": {
      "scene": "学习「Unstaged变更」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Unstaged变更（Unstaged Changes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Unstaged变更」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Unstaged变更」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Unstaged变更」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "sOoC-XxEoIvwKct00oKlX": {
      "scene": "学习「Rewriting历史」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Rewriting历史（Rewriting History）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Rewriting历史」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Rewriting历史」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Rewriting历史」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "NjPnEXLf1Lt9qzgxccogv": {
      "scene": "学习「git commit --amend（Git 命令）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "git commit --amend（Git 命令）（git commit --amend）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「git commit --amend（Git 命令）」不等于会用。重点看 工作区 → git add → git commit → log/diff 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "HMEfUFNu_Wp_Pac7VWHr-": {
      "scene": "学习「git rebase（变基）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "git rebase（变基）（git rebase）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「git rebase（变基）」不等于会用。重点看 切分支 → 分支开发 → 合并回主线 → 清理分支 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "BKVA6Q7DXemAYjyQOA0nh": {
      "scene": "学习「git filter-branch（Git 命令）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "git filter-branch（Git 命令）（git filter-branch）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「git filter-branch（Git 命令）」不等于会用。重点看 切分支 → 分支开发 → 合并回主线 → 清理分支 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "OQOmxg9mCfcjt80hpvXkA": {
      "scene": "学习「git push --force（Git 命令）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "git push --force（Git 命令）（git push --force）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「git push --force（Git 命令）」不等于会用。重点看 本地 commit → git push → git pull → 处理冲突 这条链路。",
      "experiment": "fork 一个仓库，改 README 后 push；另开目录 clone，在远程改同一行再 pull，亲手解决一次冲突。"
    },
    "iFJBF-EEnLjQVsFSXjo_i": {
      "scene": "学习「Tagging（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Tagging（技术术语）（Tagging）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Tagging（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Tagging（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Tagging（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "NeU38WPbEphJuJ_AMkH82": {
      "scene": "学习「管理Tags」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "管理Tags（Managing Tags）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「管理Tags」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「管理Tags」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「管理Tags」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "E3HAGNM-kXLL4Oci5JzpQ": {
      "scene": "学习「Pushing Tags（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Pushing Tags（技术术语）（Pushing Tags）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「Pushing Tags（技术术语）」不等于会用。重点看 本地 commit → git push → git pull → 处理冲突 这条链路。",
      "experiment": "fork 一个仓库，改 README 后 push；另开目录 clone，在远程改同一行再 pull，亲手解决一次冲突。"
    },
    "62E1tDMXB6K74OEN0WsS0": {
      "scene": "学习「切换Tags」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "切换Tags（Checkout Tags）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「切换Tags」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「切换Tags」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「切换Tags」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "YmnTrjJtqHPXbEVrP8vd7": {
      "scene": "学习「GitHub Releases（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitHub Releases（技术术语）（GitHub Releases）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitHub Releases（技术术语）」出现在哪：上游输入是什么，…",
          "text": "「GitHub Releases（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitHub Releases（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "pqBV7BMAs0z6qpfZeW2XP": {
      "scene": "学习「Git hooks（Git 命令）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Git hooks（Git 命令）（Git hooks）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Git hooks（Git 命令）」出现在哪：上游输入是什么，下游输出…",
          "text": "「Git hooks（Git 命令）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Git hooks（Git 命令）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "v7uabKuMQPOD_hBIaHOVT": {
      "scene": "学习「什么是与为什么」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "什么是与为什么（What and Why?）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「什么是与为什么」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「什么是与为什么」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「什么是与为什么」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "zsU6R2zvJKnYNU2ac4o4p": {
      "scene": "学习「客户端与服务端Hooks对比」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "客户端与服务端Hooks对比（Client vs Server Hooks）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「客户端与服务端Hooks对比」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「客户端与服务端Hooks对比」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「客户端与服务端Hooks对比」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "jzYjHx-gIKSP8dQUTqWVw": {
      "scene": "学习「COMMIT 提交-msg」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "COMMIT 提交-msg（commit-msg）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「COMMIT 提交-msg」不等于会用。重点看 工作区 → git add → git commit → log/diff 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "SANEQI2rgOtsMQyn4qUCq": {
      "scene": "学习「post-切换」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "post-切换（post-checkout）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「post-切换」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「post-切换」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「post-切换」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "buxb5TpzQ-xxn0vqtGdS3": {
      "scene": "学习「post-UPDATE 更新语句」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "post-UPDATE 更新语句（post-update）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「post-UPDATE 更新语句」出现在哪：上游输入是什么，下游输出是…",
          "text": "「post-UPDATE 更新语句」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「post-UPDATE 更新语句」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "HhpAIzYMlMiQ9msrYZyDB": {
      "scene": "学习「pre-COMMIT 提交」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "pre-COMMIT 提交（pre-commit）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「pre-COMMIT 提交」不等于会用。重点看 工作区 → git add → git commit → log/diff 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "j5kWEUKwBFg5EMm8-61K9": {
      "scene": "学习「pre-推送」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "pre-推送（pre-push）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「pre-推送」不等于会用。重点看 本地 commit → git push → git pull → 处理冲突 这条链路。",
      "experiment": "fork 一个仓库，改 README 后 push；另开目录 clone，在远程改同一行再 pull，亲手解决一次冲突。"
    },
    "fjAFNjNNbPOzme9Uk_fDV": {
      "scene": "学习「Submodules（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Submodules（技术术语）（Submodules）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Submodules（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「Submodules（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Submodules（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "x4bnsPVTiX2xOCSyrgWpF": {
      "scene": "学习「Adding / Updating（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Adding / Updating（技术术语）（Adding / Updating）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Adding / Updating（技术术语）」出现在哪：上游输入是什…",
          "text": "「Adding / Updating（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Adding / Updating（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "d0-u_-_vtPK8tnUpnj_NB": {
      "scene": "学习「什么是与为什么use?（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "什么是与为什么use?（技术术语）（What and Why use?）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「什么是与为什么use?（技术术语）」出现在哪：上游输入是什么，下游输出…",
          "text": "「什么是与为什么use?（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「什么是与为什么use?（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "h9cf_dh_pwjialOXOlNW-": {
      "scene": "学习「GitHub CLI（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitHub CLI（技术术语）（GitHub CLI）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitHub CLI（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「GitHub CLI（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitHub CLI（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "vHfpoVbOW0DHNtiy0VN4X": {
      "scene": "学习「安装与配置」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "安装与配置（Installation and Setup）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「安装与配置」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「安装与配置」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「安装与配置」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "lw4zHuhtxIO4kDvbyiVfq": {
      "scene": "学习「仓库管理」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "仓库管理（Repository management）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「仓库管理」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「仓库管理」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「仓库管理」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "kGnZifvXbHBf5zXIsfAQw": {
      "scene": "学习「Issue管理」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Issue管理（Issue Management）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Issue管理」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Issue管理」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Issue管理」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "s3MzDYFPMASqiS8UnvWzW": {
      "scene": "学习「拉取Requests」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "拉取Requests（Pull Requests）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「拉取Requests」不等于会用。重点看 本地 commit → git push → git pull → 处理冲突 这条链路。",
      "experiment": "fork 一个仓库，改 README 后 push；另开目录 clone，在远程改同一行再 pull，亲手解决一次冲突。"
    },
    "AmetdCURXXob5TUsikAab": {
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
    "p6rq3lQ9YRrTqwcc31O23": {
      "scene": "学习「YAML语法」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "YAML语法（YAML Syntax）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「YAML语法」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「YAML语法」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「YAML语法」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "55uHPFNwYPVZx8Cy3c985": {
      "scene": "学习「Workflow Triggers（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Workflow Triggers（技术术语）（Workflow Triggers）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Workflow Triggers（技术术语）」出现在哪：上游输入是什…",
          "text": "「Workflow Triggers（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Workflow Triggers（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "uS1H9KoKGNONvETCuFBbz": {
      "scene": "学习「Scheduled Worfklows（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Scheduled Worfklows（技术术语）（Scheduled Worfklows）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Scheduled Worfklows（技术术语）」出现在哪：上游输入…",
          "text": "「Scheduled Worfklows（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Scheduled Worfklows（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "6QwlY3dEvjfAOPALcWKXQ": {
      "scene": "学习「Workflow Runners（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Workflow Runners（技术术语）（Workflow Runners）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Workflow Runners（技术术语）」出现在哪：上游输入是什么…",
          "text": "「Workflow Runners（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Workflow Runners（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "BnPiTu1Jw2kIW560a2A5T": {
      "scene": "学习「Workflow Context（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Workflow Context（技术术语）（Workflow Context）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Workflow Context（技术术语）」出现在哪：上游输入是什么…",
          "text": "「Workflow Context（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Workflow Context（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "aflP7oWsQzAr4YPo2LLiQ": {
      "scene": "学习「Secrets（技术术语）与EnvVars（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Secrets（技术术语）与EnvVars（技术术语）（Secrets and Env Vars）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Secrets（技术术语）与EnvVars（技术术语）」出现在哪：上游…",
          "text": "「Secrets（技术术语）与EnvVars（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Secrets（技术术语）与EnvVars（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "HMNhzzV6ApTKj4I_FOmUB": {
      "scene": "学习「缓存Dependencies」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "缓存Dependencies（Caching Dependencies）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「缓存Dependencies」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「缓存Dependencies」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「缓存Dependencies」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "alysXC4b1hGi9ZdQ5-40y": {
      "scene": "学习「Storing Artifacts（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Storing Artifacts（技术术语）（Storing Artifacts）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Storing Artifacts（技术术语）」出现在哪：上游输入是什…",
          "text": "「Storing Artifacts（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Storing Artifacts（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "jc4R1zhd1YeCEbVuxwJWy": {
      "scene": "学习「Workflow状态」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Workflow状态（Workflow Status）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「Workflow状态」不等于会用。重点看 工作区 → git add → git commit → log/diff 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "SsogoCgJIbeTD6tk8UhTe": {
      "scene": "学习「Marketplace Actions（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Marketplace Actions（技术术语）（Marketplace Actions）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Marketplace Actions（技术术语）」出现在哪：上游输入…",
          "text": "「Marketplace Actions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Marketplace Actions（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "PUnYNBrAZWoZiopjtNgnA": {
      "scene": "学习「Usecases（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Usecases（技术术语）（Usecases）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Usecases（技术术语）」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「Usecases（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Usecases（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "Ni3HKVLanFvSrJ3u8i5I1": {
      "scene": "学习「什么是these?（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "什么是these?（技术术语）（What are these?）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「什么是these?（技术术语）」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「什么是these?（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「什么是these?（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "Y0EWgPsS4kZxH3y53jNxY": {
      "scene": "学习「Use in Automation（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Use in Automation（技术术语）（Use in Automation）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Use in Automation（技术术语）」出现在哪：上游输入是什…",
          "text": "「Use in Automation（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Use in Automation（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "sFf1PdFfmEdQxsEntfeFq": {
      "scene": "学习「Git Patch（Git 命令）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Git Patch（Git 命令）（Git Patch）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Git Patch（Git 命令）」出现在哪：上游输入是什么，下游输出…",
          "text": "「Git Patch（Git 命令）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Git Patch（Git 命令）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "hru0sL1-D4bJSQI1efEyU": {
      "scene": "学习「Git Reflog（Git 命令）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Git Reflog（Git 命令）（Git Reflog）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Git Reflog（Git 命令）」出现在哪：上游输入是什么，下游输…",
          "text": "「Git Reflog（Git 命令）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Git Reflog（Git 命令）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "ExXuwTQSI_lg4SRGW3Iu1": {
      "scene": "学习「Git Bisect（Git 命令）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Git Bisect（Git 命令）（Git Bisect）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Git Bisect（Git 命令）」出现在哪：上游输入是什么，下游输…",
          "text": "「Git Bisect（Git 命令）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Git Bisect（Git 命令）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "4dxVN81rXWn6VZqK99yq0": {
      "scene": "学习「Git Worktree（Git 命令）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Git Worktree（Git 命令）（Git Worktree）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Git Worktree（Git 命令）」出现在哪：上游输入是什么，下…",
          "text": "「Git Worktree（Git 命令）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Git Worktree（Git 命令）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "CGj_UX5JMOOCKinedsNRc": {
      "scene": "学习「Git Attributes（Git 命令）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Git Attributes（Git 命令）（Git Attributes）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Git Attributes（Git 命令）」出现在哪：上游输入是什么…",
          "text": "「Git Attributes（Git 命令）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Git Attributes（Git 命令）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "zdunaucVe8J1tKf_z-NQo": {
      "scene": "学习「Git LFS（Git 命令）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Git LFS（Git 命令）（Git LFS）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Git LFS（Git 命令）」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「Git LFS（Git 命令）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Git LFS（Git 命令）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "NV2HAXLEN7tskfgyFrbaf": {
      "scene": "学习「GitHub API（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitHub API（技术术语）（GitHub API）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitHub API（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「GitHub API（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitHub API（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "lSCnKhmRr6xrKVYxO8idD": {
      "scene": "学习「REST API（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "REST API（技术术语）（REST API）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「REST API（技术术语）」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「REST API（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「REST API（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "KlXPt-K6br8PtpLgELaCj": {
      "scene": "学习「GraphQL API（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GraphQL API（技术术语）（GraphQL API）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GraphQL API（技术术语）」出现在哪：上游输入是什么，下游输出…",
          "text": "「GraphQL API（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GraphQL API（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "5Oax1p7zIZ9HD2hmENPof": {
      "scene": "学习「创建Apps」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "创建Apps（Creating Apps）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「创建Apps」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「创建Apps」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「创建Apps」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "560GJXFTt7DPdJjKtSDOo": {
      "scene": "学习「GitHub Apps（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitHub Apps（技术术语）（GitHub Apps）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitHub Apps（技术术语）」出现在哪：上游输入是什么，下游输出…",
          "text": "「GitHub Apps（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitHub Apps（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "qrdOARfqGPF9xhF6snbAn": {
      "scene": "学习「OAuth Apps（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "OAuth Apps（技术术语）（OAuth Apps）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「OAuth Apps（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「OAuth Apps（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「OAuth Apps（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "MoG7D9kqPuA6o52-z_WDN": {
      "scene": "学习「Webhooks（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Webhooks（技术术语）（Webhooks）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Webhooks（技术术语）」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「Webhooks（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Webhooks（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "vhdGUhMAyre_Xya6IxZ-t": {
      "scene": "学习「GitHub Sponsors（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitHub Sponsors（技术术语）（GitHub Sponsors）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitHub Sponsors（技术术语）」出现在哪：上游输入是什么，…",
          "text": "「GitHub Sponsors（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitHub Sponsors（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "bnai6R6pOq_L5CPdbVwMW": {
      "scene": "学习「GitHub Pages（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitHub Pages（技术术语）（GitHub Pages）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitHub Pages（技术术语）」出现在哪：上游输入是什么，下游输…",
          "text": "「GitHub Pages（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitHub Pages（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "M2_hBvXou7cCNqsMnexCt": {
      "scene": "学习「GitHub Gists（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitHub Gists（技术术语）（GitHub Gists）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitHub Gists（技术术语）」出现在哪：上游输入是什么，下游输…",
          "text": "「GitHub Gists（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitHub Gists（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "rqPCHh25xX_ROMr-ULpaw": {
      "scene": "学习「GitHub Packages（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitHub Packages（技术术语）（GitHub Packages）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitHub Packages（技术术语）」出现在哪：上游输入是什么，…",
          "text": "「GitHub Packages（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitHub Packages（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "ZHplGidvhxEIC3HN8KqRa": {
      "scene": "学习「Deploying静态Websites」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Deploying静态Websites（Deploying Static Websites）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Deploying静态Websites」出现在哪：上游输入是什么，下游…",
          "text": "「Deploying静态Websites」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Deploying静态Websites」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "VdoxEWaU56-QCbHFRw649": {
      "scene": "学习「Custom Domains（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Custom Domains（技术术语）（Custom Domains）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Custom Domains（技术术语）」出现在哪：上游输入是什么，下…",
          "text": "「Custom Domains（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Custom Domains（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "iwfNYDlAgbA_rpWYcoHCC": {
      "scene": "学习「静态SiteGenerators」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "静态SiteGenerators（Static Site Generators）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「静态SiteGenerators」出现在哪：上游输入是什么，下游输出是…",
          "text": "「静态SiteGenerators」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「静态SiteGenerators」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "NdfwgwMOewiyEAFyC2l7U": {
      "scene": "学习「GitHub Codespaces（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitHub Codespaces（技术术语）（GitHub Codespaces）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitHub Codespaces（技术术语）」出现在哪：上游输入是什…",
          "text": "「GitHub Codespaces（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitHub Codespaces（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "pFyMiyNQ16-kP7jKaKKEU": {
      "scene": "学习「GitHub Education（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitHub Education（技术术语）（GitHub Education）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitHub Education（技术术语）」出现在哪：上游输入是什么…",
          "text": "「GitHub Education（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitHub Education（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "XRSVRl6iHncMmgSXoB7Lq": {
      "scene": "学习「Student Developer Pack（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Student Developer Pack（技术术语）（Student Developer Pack）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Student Developer Pack（技术术语）」出现在哪：上…",
          "text": "「Student Developer Pack（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Student Developer Pack（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "Pg6G4fzYb_RUhANeRKlRX": {
      "scene": "学习「GitHub Classroom（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitHub Classroom（技术术语）（GitHub Classroom）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitHub Classroom（技术术语）」出现在哪：上游输入是什么…",
          "text": "「GitHub Classroom（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitHub Classroom（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "B1KiSOt2b8t8FYD7Jxw2A": {
      "scene": "学习「Campus Program（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Campus Program（技术术语）（Campus Program）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Campus Program（技术术语）」出现在哪：上游输入是什么，下…",
          "text": "「Campus Program（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Campus Program（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "R20LXLLEzNn-SpyFDMRXj": {
      "scene": "学习「GitHub Marketplace（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitHub Marketplace（技术术语）（GitHub Marketplace）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitHub Marketplace（技术术语）」出现在哪：上游输入是…",
          "text": "「GitHub Marketplace（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitHub Marketplace（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "f2PG4t6iVtfIH8BVe5H7f": {
      "scene": "学习「GitHub安全」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitHub安全（GitHub Security）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitHub安全」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「GitHub安全」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitHub安全」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "4slyjdk2Eeg5VYY6gCDG6": {
      "scene": "学习「GitHub Models（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitHub Models（技术术语）（GitHub Models）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitHub Models（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「GitHub Models（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitHub Models（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "iWn3zDMOfLLjSp6f1jQoE": {
      "scene": "学习「GitHub Copilot（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitHub Copilot（技术术语）（GitHub Copilot）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitHub Copilot（技术术语）」出现在哪：上游输入是什么，下…",
          "text": "「GitHub Copilot（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitHub Copilot（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "Ddkss13_qDJTquDHbVTVs": {
      "scene": "学习「CITATION files（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "CITATION files（技术术语）（CITATION files）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「CITATION files（技术术语）」出现在哪：上游输入是什么，下…",
          "text": "「CITATION files（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「CITATION files（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    }
  }
};

export const stages = data.stages as Stage[];
export const nodes = data.nodes;
export const tutorials = data.tutorials as Record<string, Tutorial>;
export const lessons = data.lessons as Record<string, DeepLesson>;
