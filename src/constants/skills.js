// Skill names enum
export const SkillNames = {
  PYTHON: "python",
  PYTORCH: "pytorch",
  LLM: "llm",
  AGENT: "agent",
  OPENCV: "opencv",
  JS: "js",
  MYSQL: "mysql",
  VUE: "vue",
  MONGODB: "mongodb",
  HIVE: "hive",
  HADOOP: "hadoop",
  KAFKA: "kafka",
  GITHUB: "github",
  GIT: "git",
  CONDA: "conda",
  LINUX: "linux",
  NGINX: "nginx",
  QT: "qt",
  BURPSUITE: "burpsuite",
  SPRINGBOOT: "springboot",
  REDIS: "redis",
  SPARK: "spark",
  DOCKER: "docker",
  FLUME: "flume",
};

// Skill type (for reference)
// id: number, name: string, label: string, shortDescription: string, color: string, icon: string

export const SKILLS = {
  python: {
    id: 1, name: "python", label: "Python",
    shortDescription: "Versatile language for AI, data science & backend.",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  pytorch: {
    id: 2, name: "pytorch", label: "PyTorch",
    shortDescription: "Deep learning framework with dynamic computation graphs.",
    color: "#ee4c2c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  llm: {
    id: 3, name: "llm", label: "LLM",
    shortDescription: "AI models trained on vast text for NLP tasks.",
    color: "#10a37f",
    // devicons 无 llm 图标，用 tensorflow 替代（同属 AI/ML 领域）
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  agent: {
    id: 4, name: "agent", label: "AI Agent",
    shortDescription: "Autonomous AI that perceives, reasons & acts.",
    color: "#ff6b6b",
    // devicons 无 agent 图标，用 python 替代（Agent 开发主流语言）
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  opencv: {
    id: 5, name: "opencv", label: "OpenCV",
    shortDescription: "Open-source computer vision library for image/video processing.",
    color: "#5c3ee8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  js: {
    id: 6, name: "js", label: "JS",
    shortDescription: "Scripting language for interactive web pages.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  mysql: {
    id: 7, name: "mysql", label: "MySQL",
    shortDescription: "Open-source relational database for structured data.",
    color: "#4479a1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  vue: {
    id: 8, name: "vue", label: "Vue",
    shortDescription: "Progressive JS framework for building UIs.",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  mongodb: {
    id: 9, name: "mongodb", label: "MongoDB",
    shortDescription: "NoSQL database with flexible JSON-like documents.",
    color: "#47a248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  hive: {
    id: 10, name: "hive", label: "Hive",
    shortDescription: "Hadoop-based data warehouse for SQL-like big data queries.",
    color: "#fdee21",
    // devicons 无 hive 图标，用 apache 替代（Hive 属于 Apache 生态）
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
  },
  hadoop: {
    id: 11, name: "hadoop", label: "Hadoop",
    shortDescription: "Distributed framework for big data storage & processing.",
    color: "#66ccff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg",
  },
  kafka: {
    id: 12, name: "kafka", label: "Kafka",
    shortDescription: "Distributed streaming platform for real-time data pipelines.",
    color: "#231f20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
  },
  github: {
    id: 13, name: "github", label: "GitHub",
    shortDescription: "Platform for Git-based code hosting & collaboration.",
    color: "#181717",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  git: {
    id: 14, name: "git", label: "Git",
    shortDescription: "Distributed version control for tracking code changes.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  conda: {
    id: 15, name: "conda", label: "Conda",
    shortDescription: "Package & environment manager for Python dependencies.",
    color: "#44a833",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg",
  },
  linux: {
    id: 16, name: "linux", label: "Linux",
    shortDescription: "Open-source OS widely used in servers & cloud.",
    color: "#fcc624",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  nginx: {
    id: 17, name: "nginx", label: "NginX",
    shortDescription: "High-performance web server & reverse proxy.",
    color: "#009639",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  qt: {
    id: 18, name: "qt", label: "Qt",
    shortDescription: "Cross-platform framework for C++/QML GUI apps.",
    color: "#41cd52",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg",
  },
  burpsuite: {
    id: 19, name: "burpsuite", label: "BurpSuite",
    shortDescription: "Web security testing tool for penetration testing.",
    color: "#ff6633",
    // devicons 无 burpsuite 图标，用 java 替代（BurpSuite 基于 Java 开发）
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  springboot: {
    id: 20, name: "springboot", label: "SpringBoot",
    shortDescription: "Java framework for production-ready apps with minimal config.",
    color: "#6db33f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  redis: {
    id: 21, name: "redis", label: "Redis",
    shortDescription: "In-memory data store for cache, DB & messaging.",
    color: "#dc382d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  spark: {
    id: 22, name: "spark", label: "Spark",
    shortDescription: "Unified engine for large-scale data processing & ML.",
    color: "#e25a1c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg",
  },
  docker: {
    id: 23, name: "docker", label: "Docker",
    shortDescription: "Platform for developing & running containerized apps.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  flume: {
    id: 24, name: "flume", label: "Flume",
    shortDescription: "Distributed service for collecting & moving log data.",
    color: "#d22128",
    // devicons 无 flume 图标，用 apache 替代（Flume 属于 Apache 生态）
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
  },
};