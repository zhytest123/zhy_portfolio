import React, { useEffect } from "react";
import soundEffects from "../utils/soundEffects";
import { useDevToolsOpen } from "../utils/useDevToolsOpen";
import NyanCat from "./NyanCat";

const EasterEggs = () => {
  const { isDevToolsOpen } = useDevToolsOpen();

  useEffect(() => {
    if (!isDevToolsOpen) return;
    if (typeof console !== "undefined") {
      console.clear();

      console.log(
        "%c// 系统日志：意外访问",
        "color: #888; font-family: 'Menlo', 'Consolas', monospace; font-size: 12px;"
      );
      console.log(
        "%c等一下... 你不应该出现在这里的。👀",
        "color: #00BFFF; font-size: 22px; font-weight: bold; font-family: 'Arial', sans-serif;"
      );
      setTimeout(() => {
        console.clear();

        // --- 钩子：显示为系统提醒或直接消息 ---
        console.log(
          "%c// 系统日志：意外访问",
          "color: #888; font-family: 'Menlo', 'Consolas', monospace; font-size: 12px;"
        );
        console.log(
          "%c等一下... 你不应该出现在这里的。👀",
          "color: #00BFFF; font-size: 22px; font-weight: bold; font-family: 'Arial', sans-serif;"
        );

        const revealTimeout = setTimeout(() => {
          console.log(
            "%c好吧，既然你找到了秘密通道。好奇心重的人总会得到奖励，对吧？\n" +
              "有一个隐藏命令可以解锁这个网站的真正潜力。\n" +
              "密码是构建这一切的人的名字。",
            "background-color: #f4f4f4; color: #333; padding: 15px; border-left: 5px solid #00BFFF; line-height: 1.6; font-family: 'Arial', sans-serif; font-size: 15px;"
          );
          console.log(
            "%c准备好了吗？%c只需输入我的名字并按回车。",
            "background-color: #f4f4f4; color: #333; padding: 15px; border-left: 5px solid #00BFFF; line-height: 1.6; font-family: 'Arial', sans-serif; font-size: 15px;",
            "color: #00BFFF; font-weight: bold; background-color: #e0e0e0; padding: 2px 6px; border-radius: 4px;"
          );
        }, 800);

        ["jacky", "Jacky", "JACKY", "zhanghengyu", "zhy", "ZHY", "jacky zhang", "Jacky zhang"].forEach((name) => {
          if (Object.hasOwn(window, name)) return;
          Object.defineProperty(window, name, {
            get() {
              clearTimeout(revealTimeout);
              console.clear();
              soundEffects.playMagic();

              console.log(
                "%c✨ 已解锁 ✨\n\n%c欢迎，管理员。你现在拥有了王国的钥匙。",
                "color: #00BFFF; font-size: 32px; font-weight: bold; text-shadow: 0 0 10px rgba(0, 191, 255, 0.5);",
                "color: #444; font-size: 16px; font-family: 'Arial', sans-serif;"
              );

              // ... 在蓝图主题的 get() 函数内部 ...

              const warningTimeout = setTimeout(() => {
                // 修复：使用两个独立的 console.log 调用。
                console.log(
                  "%c小心点，不要随便更改这里的东西...",
                  "background-color: #FFFBEA; color: #D97706; border-left: 5px solid #FBBF24; padding: 15px 15px 10px 15px; font-size: 16px; font-weight: bold; font-family: 'Arial', sans-serif; border-top-left-radius: 5px; border-top-right-radius: 5px;"
                );
                console.log(
                  "%c⚠️ 你不再只是编辑一个网站了。你正在编辑我的作品集。",
                  "background-color: #FFFBEA; color: #D97706; border-left: 5px solid #FBBF24; padding: 10px 15px 15px 15px; font-size: 16px; font-weight: bold; font-family: 'Arial', sans-serif; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;"
                );
              }, 2500);

              // ... 其余代码
              window.__easterEggUnlocked = true;
              const catTimeout = setTimeout(() => {
                console.log(
                  "%c好了，严肃的事情说完了！想看看我的秘密项目吗？\n" +
                    "它有点... 花哨。而且还有一只猫。",
                  "background-color: #f4f4f4; color: #333; padding: 15px; border-left: 5px solid #9333EA; line-height: 1.6; font-family: 'Arial', sans-serif; font-size: 15px;"
                );
                console.log(
                  "%c如果你准备好迎接最强的彩虹力量，%c只需在屏幕任意位置按下 'M' 键...",
                  "background-color: #f4f4f4; color: #333; padding: 15px; border-left: 5px solid #9333EA; line-height: 1.6; font-family: 'Arial', sans-serif; font-size: 15px; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;",
                  "color: #fff; background-color: #9333EA; font-weight: bold; padding: 4px 6px; border-radius: 4px;"
                );
              }, 5500);

              return "正在初始化管理员模式...";
            },
          });
        });
        if (!Object.hasOwn(window, "Bankai")) {
          Object.defineProperty(window, "Bankai", {
            get() {
              console.clear();
              console.log(
                "%c💥 卍解！%c 花天狂骨·枯松心中 🗡️",
                // “卍解！”的样式
                "color: #FF1D1D; background-color: #111; font-size: 24px; font-weight: bold; padding: 8px 16px; border-radius: 8px; border: 2px solid #550000; text-shadow: 0 0 10px red;",
                // 技能名称的样式
                "color: #00E5FF; background-color: #1c2b3e; font-size: 18px; font-style: italic; padding: 8px 12px; border-radius: 8px; font-family: 'Georgia', serif;"
              );
              return undefined;
            },
          });
        }
      }, 3000);
    }
  }, [isDevToolsOpen]);

  return <NyanCat />;
};

export default EasterEggs;