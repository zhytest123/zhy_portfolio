# 🚀 3D Portfolio Website | 3D 作品集网站

[English](#english) | [中文](#chinese)

---

<a name="english"></a>
## English

An immersive 3D portfolio website showcasing skills, projects, and creativity through stunning 3D animations, interactive elements, and smooth motion design. Experience a cosmic journey through space-themed design with cutting-edge web technologies.

### ✨ Features

**Interactive 3D Elements**
- Custom 3D Keyboard: Interactive Spline-powered keyboard with skills as keycaps
- 3D Models: Desktop PC, Earth, and other 3D assets using Three.js
- Particle Systems: Dynamic star field background
- Elastic Cursor: Physics-based cursor animations

**Visual & Animation**
- Smooth scroll animations powered by GSAP and Framer Motion
- Space-themed dark cosmic background
- Custom preloader with animations
- Hidden easter eggs for curious visitors

**Responsive Design**
- Mobile-first approach, fully responsive
- Touch-optimized interactions
- Performance-optimized 3D rendering

**Sections**
- Hero: Eye-catching introduction with 3D elements
- About: Personal story and background
- Skills: Interactive 3D keyboard showcasing technical skills
- Projects: Portfolio of work with 3D project cards
- Achievements: Timeline of accomplishments
- Contact: Interactive contact form

### 🛠️ Tech Stack

**Frontend & Framework**
- React 18 with hooks and functional components
- Vite for lightning-fast development
- React Router DOM for client-side routing

**3D & Graphics**
- Three.js, React Three Fiber, React Three Drei
- Spline Runtime for interactive 3D design
- Custom particle systems and shaders

**Styling & Animation**
- Tailwind CSS utility-first framework
- GSAP for professional-grade animations
- Framer Motion for React animations
- React Tilt for 3D tilt effects

**Utilities**
- EmailJS for contact functionality
- React Icons for icon library
- Devtools Detector

### 🚀 Getting Started

**Prerequisites**
- Node.js (v16 or higher)
- npm or yarn package manager

**Installation**

```bash
# Clone the repository
git clone https://github.com/zhytest123/zhy_portfolio.git
cd zhy_portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

**Build for Production**

```bash
npm run build
npm run preview
```

### 📁 Project Structure

```
src/
├── components/          # React components
│   ├── canvas/         # 3D canvas components (Computers, Earth, Stars)
│   ├── preloader/      # Loading screen
│   ├── ui/            # UI components
│   └── ...            # Other components
├── reactbits/          # Custom hooks and context providers
│   ├── context/       # Audio and Cursor providers
│   ├── hooks/         # useCardIntent, useMagnetic, useParallax
│   └── motion/        # Animation variant generators
├── assets/            # Images, fonts, project assets
├── constants/         # Configuration and skills data
├── utils/            # Motion, sound effects, utilities
└── styles.js         # Global styles
```

### 🎨 Customization

**Adding 3D Models**
1. Place models in `public/` directory (glTF format recommended)
2. Import in canvas components
3. Optimize for web performance

**Modifying Animations**
- GSAP: Edit scroll-triggered animations in components
- Framer Motion: Modify motion variants
- Three.js: Update 3D animations in canvas components

**Styling**
- Tailwind: Modify classes or add custom ones
- Global: Update `src/styles.js` for theme changes

### 🚀 Deployment

**Vercel (Recommended)**
1. Push code to GitHub
2. Connect repository to Vercel
3. Auto-deploy on push

**Other Platforms**
- GitHub Pages with GitHub Actions
- Firebase Hosting with Firebase CLI
- AWS S3 for static hosting

### 📄 License

MIT License

---

<a name="chinese"></a>
## 中文

一个沉浸式的 3D 作品集网站，通过令人惊叹的 3D 动画、交互元素和流畅的动效设计展示技能、项目和创意。体验以太空为主题的宇宙之旅，采用前沿的 Web 技术构建。

### ✨ 特性

**交互式 3D 元素**
- 自定义 3D 键盘：由 Spline 驱动的交互式键盘，技能作为键帽
- 3D 模型：使用 Three.js 构建的桌面电脑、地球等 3D 资源
- 粒子系统：动态星空背景
- 弹性光标：基于物理的光标动画

**视觉与动画**
- 由 GSAP 和 Framer Motion 驱动的流畅滚动动画
- 太空主题的深色宇宙背景
- 自定义预加载动画
- 隐藏的彩蛋等待探索

**响应式设计**
- 移动优先，完全响应式
- 触摸优化的交互
- 性能优化的 3D 渲染

**页面板块**
- Hero：引人注目的 3D 元素介绍
- About：个人故事和背景
- Skills：展示技术技能的交互式 3D 键盘
- Projects：3D 项目卡片作品集
- Achievements：成就时间线
- Contact：交互式联系表单

### 🛠️ 技术栈

**前端框架**
- React 18 使用 Hooks 和函数式组件
- Vite 提供极速开发体验
- React Router DOM 实现客户端路由

**3D 图形**
- Three.js、React Three Fiber、React Three Drei
- Spline Runtime 用于交互式 3D 设计
- 自定义粒子系统和着色器

**样式与动画**
- Tailwind CSS 实用优先的框架
- GSAP 专业级动画
- Framer Motion React 动画库
- React Tilt 3D 倾斜效果

**工具库**
- EmailJS 联系表单功能
- React Icons 图标库
- Devtools Detector 开发工具检测

### 🚀 快速开始

**前置要求**
- Node.js (v16 或更高版本)
- npm 或 yarn 包管理器

**安装步骤**

```bash
# 克隆仓库
git clone https://github.com/zhytest123/zhy_portfolio.git
cd zhy_portfolio

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 打开 http://localhost:5173
```

**生产构建**

```bash
npm run build
npm run preview
```

### 📁 项目结构

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

### 🎨 自定义

**添加 3D 模型**
1. 将模型放在 `public/` 目录（推荐 glTF 格式）
2. 在画布组件中导入
3. 优化 Web 性能

**修改动画**
- GSAP：在组件中编辑滚动触发动画
- Framer Motion：修改动画变体
- Three.js：在画布组件中更新 3D 动画

**样式修改**
- Tailwind：修改类名或添加自定义类
- 全局：更新 `src/styles.js` 进行主题更改

### 🚀 部署

**Vercel（推荐）**
1. 推送代码到 GitHub
2. 连接仓库到 Vercel
3. 推送时自动部署

**其他平台**
- GitHub Pages 使用 GitHub Actions
- Firebase Hosting 使用 Firebase CLI
- AWS S3 静态托管

### 📄 许可证

MIT License
