// SkillKeyboard.jsx
// 这个组件使用 Spline 和 GSAP 动画渲染一个交互式的 3D 技能键盘
// 每个按键代表一项技能，键盘会响应用户的操作进行动画效果
// 主要功能：
// 1. 加载并显示 3D 键盘模型
// 2. 处理鼠标悬停和点击事件，显示技能详情
// 3. 根据不同设备（桌面/移动端）和页面区域调整键盘的位置、缩放和旋转
// 4. 实现键盘和按键的入场动画效果

import { Application } from "@splinetool/runtime";
import gsap from "gsap";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { SKILLS, SkillNames } from "../constants/skills";
import { sleep } from "../utils/sleep";
import useMediaQuery from "../utils/useMediaQuery";
import soundEffects from "../utils/soundEffects";

// 懒加载 Spline React 组件用于 3D 渲染
// 使用懒加载可以减少初始页面加载时间，提升性能
const Spline = React.lazy(() => import("@splinetool/react-spline"));

// 键盘在不同页面区域和设备类型下的变换状态配置
// 包含缩放(scale)、位置(position)、旋转(rotation)三个维度
// 每个状态都分为 desktop（桌面端）和 mobile（移动端）两种配置
const STATES = {
  // 首页(hero)区域的键盘状态
  hero: {
    desktop: {
      scale: { x: 0.35, y: 0.33, z: 0.35 },
      position: { x: 20, y: 0, z: 40 }, // 水平和垂直居中
      rotation: { x: 0, y: 0, z: 0 },
    },
    mobile: {
      scale: { x: 0.17, y: 0.17, z: 0.17 },
      position: { x: 10, y: 0, z: 0 }, // 移动端居中
      rotation: { x: 0, y: 0, z: 0 },
    },
  },
  // 技能(skills)区域的键盘状态
  skills: {
    desktop: {
      scale: { x: 0.33, y: 0.33, z: 0.33 },
      position: { x: 0, y: 0, z: 0 }, // 居中显示
      rotation: { x: 0, y: Math.PI / 12, z: 0 }, // Y轴旋转15度，让键盘稍微倾斜
    },
    mobile: {
      scale: { x: 0.24, y: 0.24, z: 0.24 },
      position: { x: 0, y: 0, z: 0 }, // 居中显示
      rotation: { x: 0, y: Math.PI / 6, z: 0 }, // Y轴旋转30度
    },
  },
  // 项目(projects)区域的键盘状态
  projects: {
    desktop: {
      scale: { x: 0.25, y: 0.25, z: 0.25 },
      position: { x: 0, y: 0, z: 0 }, // 居中显示
      rotation: { x: Math.PI, y: Math.PI / 3, z: Math.PI }, // 翻转180度并旋转60度
    },
    mobile: {
      scale: { x: 0.18, y: 0.18, z: 0.18 },
      position: { x: 0, y: 0, z: 0 }, // 居中显示
      rotation: { x: Math.PI, y: Math.PI / 3, z: Math.PI }, // 翻转180度并旋转60度
    },
  },
  // 联系(contact)区域的键盘状态
  contact: {
    desktop: {
      scale: { x: 0.33, y: 0.33, z: 0.33 },
      position: { x: 0, y: 0, z: 0 }, // 居中显示
      rotation: { x: 0, y: 0, z: 0 },
    },
    mobile: {
      scale: { x: 0.24, y: 0.24, z: 0.24 },
      position: { x: 0, y: 0, z: 0 }, // 居中显示
      rotation: { x: Math.PI, y: Math.PI / 3, z: Math.PI }, // 翻转180度并旋转60度
    },
  },
};

const SkillKeyboard = () => {
  // 检测用户是否在移动设备上（屏幕宽度小于768px）
  const isMobile = useMediaQuery("(max-width: 768px)");
  // Spline 组件实例的引用
  const splineContainer = useRef(null);
  // section 元素的引用，用于 IntersectionObserver 监听
  const sectionRef = useRef(null);
  // Spline 应用实例，用于控制 3D 场景（如查找对象、设置变量等）
  const [splineApp, setSplineApp] = useState();
  // 当前高亮显示的技能（当按键被悬停或按下时）
  const [selectedSkill, setSelectedSkill] = useState(null);
  // 当前激活的页面区域（影响键盘的动画状态）
  const [activeSection, setActiveSection] = useState("skills");
  // 键盘是否已完成入场动画
  const [keyboardRevealed, setKeyboardRevealed] = useState(false);
  // 技能区域是否在视口内（用于触发动画）
  const [isInView, setIsInView] = useState(false);

  // 辅助函数：根据当前区域和设备类型获取正确的键盘变换状态
  // 参数 section: 页面区域名称（hero/skills/projects/contact）
  // 返回对应的 scale、position、rotation 配置
  const keyboardStates = (section) => {
    return STATES[section][isMobile ? "mobile" : "desktop"];
  };

  // 设置 IntersectionObserver 来检测技能区域何时进入视口
  // 当区域进入视口时触发键盘入场动画
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // 标记区域已进入视口
        }
      },
      {
        threshold: 0.3, // 当区域的30%可见时触发
        rootMargin: "0px 0px -100px 0px", // 在区域完全进入视口前稍微提前触发
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // 清理函数：组件卸载时取消监听
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // 处理 3D 按键上的鼠标悬停事件
  // 当鼠标悬停在按键上时，显示对应技能的信息
  const handleMouseHover = (e) => {
    // 如果 Spline 未加载或悬停的是同一个按键，则不处理
    if (!splineApp || selectedSkill?.name === e.target.name) return;

    // 如果悬停在键盘主体或底座上，清除选中状态
    if (e.target.name === "body" || e.target.name === "platform") {
      setSelectedSkill(null);
      // 清空 Spline 场景中的标题和描述变量
      if (splineApp.getVariable("heading") && splineApp.getVariable("desc")) {
        splineApp.setVariable("heading", "");
        splineApp.setVariable("desc", "");
      }
    } else {
      // 否则，根据按键名称设置选中的技能
      if (!selectedSkill || selectedSkill.name !== e.target.name) {
        const skill = SKILLS[e.target.name];
        setSelectedSkill(skill);
      }
    }
  };

  // 当选中的技能改变时，更新 Spline 场景中显示的信息
  // 将技能的标签和简短描述传递给 Spline 场景中的变量
  useEffect(() => {
    if (!selectedSkill || !splineApp) return;
    splineApp.setVariable("heading", selectedSkill.label); // 设置标题
    splineApp.setVariable("desc", selectedSkill.shortDescription); // 设置描述
  }, [selectedSkill, splineApp]);

  // 根据当前区域和设备类型显示/隐藏技能标签
  // 只在技能区域显示标签，其他区域隐藏
  useEffect(() => {
    if (!splineApp) return;

    // 查找 Spline 场景中的文本对象（目前只支持浅色模式）
    const textDesktopLight = splineApp.findObjectByName("text-desktop");
    const textMobileLight = splineApp.findObjectByName("text-mobile");
    if (!textDesktopLight || !textMobileLight) return;

    // 如果不在技能区域，隐藏所有文本
    if (activeSection !== "skills") {
      textDesktopLight.visible = false;
      textMobileLight.visible = false;
      return;
    }

    // 根据设备类型显示对应的文本
    if (!isMobile) {
      textDesktopLight.visible = true;  // 桌面端显示桌面文本
      textMobileLight.visible = false;
    } else {
      textDesktopLight.visible = false;
      textMobileLight.visible = true;   // 移动端显示移动文本
    }
  }, [splineApp, isMobile, activeSection]);

  // 当 Spline 场景加载完成时，设置事件监听器和 GSAP 动画
  useEffect(() => {
    handleSplineInteractions(); // 设置 Spline 交互事件
    handleGsapAnimations();      // 设置 GSAP 动画
    applyKeyTextures();          // 应用按键贴图
  }, [splineApp]);

  // 当场景准备好且区域进入视口时，触发键盘入场动画
  useEffect(() => {
    if (!splineApp || keyboardRevealed || !isInView) return;
    revealKeyCaps(); // 执行按键显示动画
  }, [splineApp, keyboardRevealed, activeSection, isInView]);

  // 执行键盘和按键的入场动画
  // 包括键盘整体的缩放动画和按键逐个弹出的效果
  const revealKeyCaps = async () => {
    if (!splineApp) return;

    // 查找键盘对象
    const kbd = splineApp.findObjectByName("keyboard");
    if (!kbd) return;

    // 先隐藏键盘
    kbd.visible = false;
    await sleep(400); // 等待400ms后再显示
    kbd.visible = true;
    setKeyboardRevealed(true);

    // 使用 GSAP 动画键盘的缩放效果（从极小放大到正常大小）
    gsap.fromTo(
      kbd?.scale,
      { x: 0.01, y: 0.01, z: 0.01 }, // 起始状态：极小
      {
        x: keyboardStates(activeSection).scale.x,
        y: keyboardStates(activeSection).scale.y,
        z: keyboardStates(activeSection).scale.z,
        duration: 1.5,                    // 动画持续1.5秒
        ease: "elastic.out(1, 0.6)",      // 弹性缓动效果
      }
    );

    // 获取所有按键对象
    const allObjects = splineApp.getAllObjects();
    const keycaps = allObjects.filter((obj) => obj.name === "keycap");
    await sleep(900); // 等待键盘缩放动画进行一段时间

    if (isMobile) {
      // 移动端：一次性显示所有按键
      const mobileKeyCaps = allObjects.filter(
        (obj) => obj.name === "keycap-mobile"
      );
      mobileKeyCaps.forEach((keycap) => {
        keycap.visible = true;
      });
    } else {
      // 桌面端：逐个显示按键
      const desktopKeyCaps = allObjects.filter(
        (obj) => obj.name === "keycap-desktop"
      );
      desktopKeyCaps.forEach(async (keycap, idx) => {
        await sleep(idx * 70); // 每个按键延迟70ms显示
        keycap.visible = true;
      });
    }

    // 为所有按键添加弹跳动画效果
    keycaps.forEach(async (keycap, idx) => {
      keycap.visible = false;
      await sleep(idx * 70); // 按顺序延迟显示
      keycap.visible = true;
      // 从上方(y=100)弹跳到正常位置(y=25)
      gsap.fromTo(
        keycap.position,
        { y: 100 },
        { y: 25, duration: 0.5, delay: 0.1, ease: "bounce.out" }
      );
    });
  };

  // 设置 Spline 事件监听器，处理按键的按下、释放和悬停事件
  const handleSplineInteractions = () => {
    if (!splineApp) return;

    // 按键释放时清除技能信息显示
    splineApp.addEventListener("keyUp", (e) => {
      if (!splineApp) return;
      splineApp.setVariable("heading", "");
      splineApp.setVariable("desc", "");
    });

    // 按键按下时显示技能信息并播放点击音效
    splineApp.addEventListener("keyDown", (e) => {
      if (!splineApp) return;
      const skill = SKILLS[e.target.name];
      if (skill) setSelectedSkill(skill);
      splineApp.setVariable("heading", skill?.label || "");
      splineApp.setVariable("desc", skill?.shortDescription || "");
      soundEffects.playClick(); // 播放按键音效
    });

    // 处理鼠标悬停事件
    splineApp.addEventListener("mouseHover", handleMouseHover);
  };

  // 设置初始的 GSAP 动画，配置键盘的初始状态
  const handleGsapAnimations = () => {
    if (!splineApp) return;
    const kbd = splineApp.findObjectByName("keyboard");
    if (!kbd || !splineContainer.current) return;

    // 设置键盘的初始缩放和位置（使用 hero 区域的配置）
    gsap.set(kbd.scale, { ...keyboardStates("hero").scale });
    gsap.set(kbd.position, { ...keyboardStates("hero").position });

    // 创建时间线动画，动画开始时将激活区域设置为 skills
    gsap.timeline({
      onStart: () => setActiveSection("skills"),
    });

    // 可以在这里添加基于滚动的触发器，实现不同区域间的动画过渡
  };

  // 动态应用按键贴图
  // 遍历所有技能，为每个按键对象设置对应的图标纹理
  const applyKeyTextures = async () => {
    if (!splineApp) return;

    const allObjects = splineApp.getAllObjects();

    // 遍历所有技能
    Object.values(SKILLS).forEach((skill) => {
      // 查找对应名称的按键对象
      const keyObject = allObjects.find((obj) => obj.name === skill.name);

      if (keyObject && skill.icon) {
        try {
          // 获取按键的材质
          const material = keyObject.material;

          if (material) {
            // 创建纹理加载器并加载图标
            const texture = new Image();
            texture.crossOrigin = "anonymous"; // 允许跨域加载
            texture.src = skill.icon;

            texture.onload = () => {
              // 图片加载成功后，将其设置为材质的纹理
              if (material.baseColorTexture) {
                material.baseColorTexture.image = texture;
                material.baseColorTexture.needsUpdate = true;
              } else {
                // 如果材质没有纹理，创建一个新的
                material.baseColorTexture = {
                  image: texture,
                  needsUpdate: true
                };
              }
            };

            texture.onerror = () => {
              console.warn(`无法加载技能图标: ${skill.name} - ${skill.icon}`);
            };
          }
        } catch (error) {
          console.error(`设置按键贴图失败: ${skill.name}`, error);
        }
      }
    });
  };

  // 渲染 3D 键盘区域
  return (
    <section
      ref={sectionRef}
      id="skills"
      style={{
        width: "100%",
        height: "100vh",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 技能区域标题 */}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            fontSize: "4rem",
            fontWeight: 700,
            marginTop: 34,
            textAlign: "center",
            letterSpacing: 2,
            color: "#fff",
            textShadow: "0 2px 16px rgba(0,0,0,0.2)",
          }}
        >
          Skills
        </h2>
        <p style={{ textAlign: "center", color: "#aaa" }}>
          (hint: press a key)
        </p>
        {/* Suspense 提供加载 3D 场景时的后备内容 */}
        <Suspense fallback={<div>Loading 3D Keyboard...</div>}>
          <Spline
            ref={splineContainer}
            onLoad={(app) => setSplineApp(app)}
            scene="/assets/skills-keyboard.spline"
          />
        </Suspense>
      </div>
      <span id="projects"></span>
    </section>
  );
};

export default SkillKeyboard;
