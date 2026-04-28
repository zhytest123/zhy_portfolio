import {
  strangeanimals,
  backend,
  cnkicrawler,
  code,
  concepts,
  ucas,
  didi,
  csu,
  sinh,
  yjgl,
  creator,
  designs,
  ecust,
  shgame,
  ideas,
  improveddino,
  mobile,
  chatbot,
  rpvfigmain,
  rpvfig1,
  rpvfig2,
  rpvfig3,
  rpvfig4,
  rpvfig5,
  rpvfig6,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "关于",
  },
  {
    id: "achievement",
    title: "成就",
  },
  {
    id: "contact",
    title: "联系",
  },
];

const services = [
  {
    title: "算法研发",
    icon: web,
  },
  {
    title: "数据开发",
    icon: mobile,
  },
  {
    title: "前后端开发",
    icon: backend,
  },
  {
    title: "网络安全",
    icon: creator,
  },
];

const achievements = [
  {
    title: ["华东理工大学"],
    company_name: "华东理工大学",
    icon: ecust,
    iconBg: "#383E56",
    date: "2021-2025",
    points: ["优秀毕业生、优秀奖学金、优秀团员", "新生提案大赛第一名、机械工程创新大赛⼀等奖、福陆工程师周友谊赛第⼀名、第十六届数学大奖赛二等奖、网络安全选拔赛三等奖", "上海市Python三级证书、人工智能四级证书、网络安全四级证书"],
    credential: [
      "https://mp.weixin.qq.com/s/d6RWKH5fONYDKz7E0l_pdQ",
      "https://mp.weixin.qq.com/s/rmPIVvEMNpWj3FdAcpbOZw",
    ],
  },
  {
    title: ["上海市大学生竞赛"],
    company_name: "华东理工大学",
    icon: shgame,
    iconBg: "#E6DEDD",
    date: "2023-2024",
    points: [
      "第十三届大学生机械工程创新大赛二等奖",
      "第一届天翼云杯云计算大赛程序设计赛道优胜奖",
      "大学生双创优秀项目-基于科技信息的人才画像构建研究",
      "第十五届计算机应用能力大赛三等奖",
      "第十六届计算机应用能力大赛三等奖",
    ],
    credential: [
      "https://www.hackerrank.com/certificates/b011ba865ccf",
      "https://www.hackerrank.com/certificates/633d92ea00fe",
      "https://mp.weixin.qq.com/s/R_emQ7GfdFl6dxXFkALsrQ",
    ],
  },
  {
    title: ["中科院上海营养所生命科学信息中心"],
    company_name: "中科院上海营养与健康所生命科学信息中心",
    icon: sinh,
    iconBg: "#383E56",
    date: "2024-2025",
    points: ["数据管理与知识组织工程师", "数据开发工程师"],
    credential: [],
  },
  {
    title: ["江西省应急管理厅"],
    company_name: "江西省应急管理厅防灾减灾中心",
    icon: yjgl,
    iconBg: "#383E56",
    date: "2025",
    points: ["数据开发实习生"],
    credential: [],
  },
  {
    title: ["中国科学院大学"],
    company_name: "计算机技术",
    icon: ucas,
    iconBg: "#0056d2",
    date: "2025",
    points: ["学业奖学金", "第四届中国空间科学大会"],
    credential: [
      "",
      "https://cssa2025.cssr.org.cn/",
    ],
  },
  {
    title: ["滴滴出行"],
    company_name: "滴滴出行",
    icon: didi,
    iconBg: "#0056d2",
    date: "2026",
    points: ["安全研发实习生"],
    credential: [],
  },
  {
    title: ["中科院空间应用工程与技术中心"],
    company_name: "空间应用中心",
    icon: csu,
    iconBg: "#0056d2",
    date: "2026",
    points: ["算法工程师", "研究助理"],
    credential: [],
  },
];

const testimonials = [
  {
    testimonial:
      "该同志带领四人团队参与了江西省科技+应急联合项目(2023KYG01001), 表现十分突出，对项目进程推进做出了极大的贡献。",
    name: "熊得森",
    designation: "科长",
    company: "江西省应急管理厅",
    image: "https://ui-avatars.com/api/?name=熊",
  },
  {
    testimonial:
      "恒钰作为项目第一负责人表现出优秀的项目设计和组织实施能力，在数据处理及开发方面刻苦投入，出色的完成了项目的预期目标。",
    name: "李楠",
    designation: "副馆长、主任",
    company: "华东理工大学图书馆；情报与服务部；知识产权中心",
    image: "https://ui-avatars.com/api/?name=李",
  },
  {
    testimonial:
      "恒钰刻苦钻研，知识扎实，技术能力超群，能够给团队解决各种疑难杂症，时间管理和自我管理意识也非常强，是非常优秀的同学。",
    name: "张永娟",
    designation: "副研究员",
    company: "中科院上海营养所生命科学信息中心战略情报部",
    image: "https://ui-avatars.com/api/?name=张",
  },
  {
    testimonial:
      "张恒钰对专业领域知识具有强烈的学习自驱力与探索能力，能够主动追踪科技前沿，并取得了丰硕的成果。",
    name: "张玉",
    designation: "教授",
    company: "华东理工大学",
    image: "https://mech.ecust.edu.cn/_upload/article/images/4c/8f/a7af4fd14a6f8b80ded8409fa0ee/6b4acc86-fa7b-4cd5-858d-37927c2418f0.jpg",
  },
  {
    testimonial:
      "该同学在实践期间，遵守本单位的各项规章制度，工作用心肯干，并能主动提出自己的见解，十分优秀。",
    name: "金鑫",
    designation: "团委书记",
    company: "云南省文山州公安局",
    image: "https://ui-avatars.com/api/?name=金",
  },
  {
    testimonial:
      "Jacky在职期间完成权限回收能力skill搭建、把脉日志脱敏治理、业务逻辑漏洞检测等工作，贡献突出！",
    name: "hongyang Wang",
    designation: "杰出专家工程师",
    company: "滴滴出行",
    image: "https://img.sechub.at/dffaecedfafdb7b34e8c5314d113fd130a0273e8",
  },
];

const projects = [
  {
    name: "Improve DINO 端到端目标检测算法",
    description:
      "针对小目标陨石坑检测场景优化的 Improved DINO 目标检测框架，强化多尺度特征建模、候选生成与检测精度表现。",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pytorch",
        color: "green-text-gradient",
      },
      {
        name: "Cuda",
        color: "pink-text-gradient",
      },
      {
        name: "Transformer",
        color: "violet-text-gradient",
      },
    ],
    image: improveddino,
    images: [improveddino], // Multiple screenshot support
    source_code_link: "https://github.com/zhytest123/Improved-DINO-for-crater",
    live_demo_link: "https://github.com/zhytest123/Improved-DINO-for-crater",
    metrics: {
      stars: 89,
      forks: 28,
      views: "1.8K",
    },
    features: [
      "面向小目标对DINO框架进行针对性改进与重构。",
      "引入HSFPN金字塔，强化弱纹理小目标表征能力。",
      "优化候选生成与去噪训练策略。",
      "支持端到端训练与推理，检测闭环。",
      "提升复杂背景下的目标召回表现。",
      "相较基线模型取得更优精度。",
    ],
  },
  {
    name: "chatbot 数字虚拟女友",
    description:
      "面向 ChatGLM 的全流程大模型微调与应用系统，集成数据上传解析、清洗预处理、模型训练、权限管理与智能问答能力。",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
      {
        name: "Vue",
        color: "violet-text-gradient",
      },
      {
        name: "Mysql",
        color: "orange-text-gradient",
      },
    ],
    image: chatbot,
    images: [chatbot], // Multiple screenshot support
    source_code_link: "https://github.com/zhytest123/ChatGLM-FineTuning-System",
    live_demo_link: "https://github.com/zhytest123/ChatGLM-FineTuning-System",
    metrics: {
      stars: 127,
      forks: 35,
      views: "3.1K",
    },
    features: [
      "面向ChatGLM的模型微调与应用一体化平台。",
      "集成Freeze、P-Tuning、LoRA等微调方案。",
      "结合 DeepSpeed 与量化能力优化训练资源开销。",
      "支持 SQLite 数据上传解析。",
      "实现多轮对话、上下文记忆与历史管理。",
      "提供用户认证、权限隔离与前后端联动能力。",
    ],
  },
  {
    name: "CNKI 高并发爬虫框架",
    description:
      "作为第一负责人研发高并发CNKI学术数据采集引擎，构建动态IP代理路由池与多维浏览器指纹轮换中间件，通过长链Cookie会话热管理及视觉验证码CV破解流水线，系统性突破平台高频频控与WAF拦截，将日均万级文献采集成功率稳定在98%以上。项目获省级大创资助并以全省前10%优秀结题，授权软著1项，沉淀的百万级学术元数据直接支撑核心期刊论文《工程科技人才发展规律及其特征研究》发表。",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Sqlite3",
        color: "green-text-gradient",
      },
      {
        name: "Multiprocessing",
        color: "pink-text-gradient",
      },
      {
        name: "Requests",
        color: "violet-text-gradient",
      },
    ],
    image: cnkicrawler,
    images: [cnkicrawler], // Multiple screenshot support
    source_code_link: "https://github.com/zhytest123/",
    live_demo_link: "https://github.com/zhytest123/",
    metrics: {
      stars: 152,
      forks: 42,
      views: "2.3K",
    },
    features: [
      "万行级高并发采集引擎，支持断点续采。",
      "动态IP代理池 + 多维指纹轮换中间件。",
      "Cookie热会话管理，视觉验证码CV破解流水线。",
      "全链路容错与可观测体系，采集成功率稳定 ≥98%。",
      "省级基金资助，前10%优秀结题+软著授权。",
      "支撑核心期刊论文发表。"
    ]
  },
  {
    name: "动物怪怪 Strange Animals",
    description:
      "基于 Unity 的交互式 3D 奇幻冒险解谜游戏，融合魔法动物互动、元素机关设计与场景探索体验。",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Unity",
        color: "green-text-gradient",
      },
      {
        name: ".Net",
        color: "pink-text-gradient",
      },
    ],
    image: strangeanimals,
    images: [strangeanimals], // Multiple screenshot support
    source_code_link: "https://github.com/zhytest123/StrangeAnimals",
    live_demo_link: "https://github.com/zhytest123/StrangeAnimals",
    metrics: {
      stars: 152,
      forks: 42,
      views: "2.3K",
    },
    features: [
      "围绕奇幻世界探索与交互推进核心玩法。",
      "剧情触发、任务引导与沉浸式叙事体验。",
      "差异化环境交互与解谜逻辑。",
      "NPC 互动对话系统。",
      "搭建 3D 场景探索与机关交互系统。",
      "角色移动、镜头跟随与动画联动。",
    ],
  },
  {
    name: "含缺陷承压设备裂纹扩展行为预测软件开发",
    description:
      "基于断裂力学的反应堆压力容器（RPV）疲劳裂纹扩展行为预测软件，采用多线程计算，支持筒体环向/纵向裂纹及接管内隅角裂纹分析。",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Qt",
        color: "green-text-gradient",
      },
      {
        name: "Multiprocessing",
        color: "pink-text-gradient",
      },
      {
        name: "Pyside",
        color: "orange-text-gradient",
      },
    ],
    image: rpvfigmain,
    images: [rpvfig1, rpvfig2, rpvfig3], // Multiple screenshot support
    source_code_link: "https://github.com/zhytest123/RPV-Fatigue-Crack-Growth-Prediction",
    live_demo_link: "https://github.com/zhytest123/RPV-Fatigue-Crack-Growth-Prediction",
    metrics: {
      stars: 76,
      forks: 19,
      views: "945",
    },
    features: [
      "桌面化工程工具。",
      "面向反应堆压力容器缺陷评估场景。",
      "筒体环向、纵向及接管内隅角等典型缺陷形式。",
      "提供图形化参数输入与工况配置能力。",
      "通过多进程提升计算效率。",
      "服务于寿命预测、安全评估与检维修方案论证。",
    ],
  },
  {
    name: "超临界水冷堆压力容器设计",
    description:
      "以 `SA508 Gr.4N Cl.1` 为主要材料对象，围绕压力容器顶盖区、堆芯区筒体、下封头和接管区开展初步结构设计与补强计算。",
    tags: [
      {
        name: "CAD",
        color: "blue-text-gradient",
      },
      {
        name: "Solidwork",
        color: "green-text-gradient",
      },
      {
        name: "ASME",
        color: "pink-text-gradient",
      },
    ],
    image: rpvfig4,
    images: [rpvfig5, rpvfig6], // Multiple screenshot support
    source_code_link: "https://github.com/zhytest123/RPV-design",
    live_demo_link: "https://github.com/zhytest123/RPV-design",
    metrics: {
      stars: 234,
      forks: 67,
      views: "5.2K",
    },
    features: [
      "SA508 Gr.4N Cl.1 为主要材料对象",
      "主要区域初步尺寸设计与选型分析。",
      "工程化参数校核与方案论证。",
      "壁厚初算、开孔补强与局部结构强度校核。",
    ],
  },
];

const words = [
  { text: "Ideas", imgPath: ideas, font: "Arial, sans-serif" },
  { text: "Concepts", imgPath: concepts, font: "'Courier New', Courier, monospace", },
  { text: "Designs", imgPath: designs, font: "'Times New Roman', Times, serif", },
  { text: "Code", imgPath: code, font: "'Fira Mono', monospace" },
  { text: "Ideas", imgPath: ideas, font: "'Comic Sans MS', cursive, sans-serif", },
  { text: "Concepts", imgPath: concepts, font: "'Roboto', sans-serif" },
  { text: "Designs", imgPath: designs, font: "'Georgia', serif" },
  { text: "Code", imgPath: code, font: "'Source Code Pro', monospace" },
];

export { achievements, projects, services, testimonials, words };
