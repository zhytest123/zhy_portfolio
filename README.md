# 🚀 3D 作品集网站

一个沉浸式的 3D 作品集网站，通过令人惊叹的 3D 动画、交互元素和流畅的动效设计展示技能、项目和创意。体验以太空为主题的宇宙之旅，采用前沿的 Web 技术构建。

## ✨ 特性

### 交互式 3D 元素
- **自定义 3D 键盘**：由 Spline 驱动的交互式键盘，技能作为键帽
- **3D 模型**：使用 Three.js 构建的桌面电脑、地球等 3D 资源
- **粒子系统**：动态星空背景
- **弹性光标**：基于物理的光标动画

### 视觉与动画
- 由 GSAP 和 Framer Motion 驱动的流畅滚动动画
- 太空主题的深色宇宙背景
- 自定义预加载动画
- 隐藏的彩蛋等待探索

### 响应式设计
- 移动优先，完全响应式
- 触摸优化的交互
- 性能优化的 3D 渲染

### 页面板块
- **Hero**：引人注目的 3D 元素介绍
- **About**：个人故事和背景
- **Skills**：展示技术技能的交互式 3D 键盘
- **Projects**：3D 项目卡片作品集
- **Achievements**：成就时间线
- **Contact**：交互式联系表单

## 🛠️ 技术栈

### 前端框架
- **React 18** - 使用 Hooks 和函数式组件
- **Vite** - 极速开发体验
- **React Router DOM** - 客户端路由

### 3D 图形
- **Three.js** - 3D 图形库
- **React Three Fiber** - Three.js 的 React 渲染器
- **React Three Drei** - React Three Fiber 的实用工具
- **Spline Runtime** - 交互式 3D 设计工具集成

### 样式与动画
- **Tailwind CSS** - 实用优先的 CSS 框架
- **GSAP** - 专业级动画库
- **Framer Motion** - React 动画库
- **React Tilt** - 3D 倾斜效果

### 工具库
- **React Icons** - 图标库
- **EmailJS** - 邮件功能
- **Devtools Detector** - 开发工具检测

## 🚀 快速开始

### 前置要求
- Node.js (v16 或更高版本)
- npm 或 yarn 包管理器

### 安装步骤

```bash
# 克隆仓库
git clone https://github.com/zhytest123/zhy_portfolio.git
cd zhy_portfolio

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 打开浏览器访问 http://localhost:5173
```

### 生产构建

```bash
npm run build
npm run preview
```

## 📁 项目结构

```
src/
├── components/          # React 组件
│   ├── canvas/         # 3D 画布组件（电脑、地球、星空）
│   ├── preloader/      # 加载屏幕
│   ├── ui/            # UI 组件
│   └── ...            # 其他组件
├── reactbits/          # 自定义 Hooks 和 Context 提供者
│   ├── context/       # 音频和光标提供者
│   ├── hooks/         # useCardIntent、useMagnetic、useParallax
│   └── motion/        # 动画变体生成器
├── assets/            # 图片、字体、项目资源
├── constants/         # 配置和技能数据
├── utils/            # 动效、音效、工具函数
└── styles.js         # 全局样式
```

## 🎨 自定义

### 添加 3D 模型
1. 将模型放在 `public/` 目录（推荐 glTF 格式）
2. 在画布组件中导入
3. 优化 Web 性能

### 修改动画
- **GSAP**：在组件中编辑滚动触发动画
- **Framer Motion**：修改动画变体
- **Three.js**：在画布组件中更新 3D 动画

### 样式修改
- **Tailwind**：修改类名或添加自定义类
- **全局样式**：更新 `src/styles.js` 进行主题更改

## 🚀 部署

### Vercel（推荐）
1. 推送代码到 GitHub
2. 连接仓库到 Vercel
3. 推送时自动部署

### 其他平台
- **GitHub Pages**：使用 GitHub Actions
- **Firebase Hosting**：使用 Firebase CLI
- **AWS S3**：静态托管

## 📄 许可证

MIT License
