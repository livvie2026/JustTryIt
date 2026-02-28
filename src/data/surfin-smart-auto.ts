
import { Article } from '../types/schema';

export const surfinSmartAuto: Article = {
  title: "SurfinSmartAuto 项目演示",
  blocks: [
    {
      type: "title",
      text: "SurfinSmartAuto\n让自动化测试像搭积木一样简单",
      durationInFrames: 140,
      subtitle: "SurfinSmartAuto：让自动化测试像搭积木一样简单",
      audioPath: "voiceover/surfin-smart-auto/block-00.mp3"
    },
    {
      type: "highlight",
      text: "传统自动化痛点：\n维护难、门槛高、纯AI太慢",
      highlightWord: "太慢",
      durationInFrames: 150,
      subtitle: "传统自动化：维护难、门槛高、纯AI太慢",
      audioPath: "voiceover/surfin-smart-auto/block-01.mp3"
    },
    {
      type: "text",
      text: "核心理念：\n🧩 积木式操作\n🔄 一次编写，多端复用",
      durationInFrames: 150,
      subtitle: "我们的方案：搭积木式操作，一次编写，多端复用",
      audioPath: "voiceover/surfin-smart-auto/block-02.mp3"
    },
    {
      type: "image",
      src: "/assets/sources/architecture.png",
      title: "技术架构：UI-TARS + Android/iOS/Web",
      durationInFrames: 180,
      subtitle: "基于 UI-TARS 视觉大模型，支持 Android/iOS/Web 三端",
      audioPath: "voiceover/surfin-smart-auto/block-03.mp3"
    },
    {
      type: "video",
      src: "/assets/sources/demo_video_ai.mp4",
      title: "演示：AI 学习模式",
      durationInFrames: 300,
      subtitle: "演示：AI 学习模式，像人眼一样识别屏幕",
      audioPath: "voiceover/surfin-smart-auto/block-04.mp3"
    },
    {
      type: "video",
      src: "/assets/sources/demo_video_cache.mp4",
      title: "演示：极速缓存模式",
      durationInFrames: 300,
      subtitle: "演示：缓存模式，毫秒级执行，速度提升50倍",
      audioPath: "voiceover/surfin-smart-auto/block-05.mp3"
    },
    {
      type: "text",
      text: "未来展望：\n1. 云端流水线\n2. 自动缺陷归因\n3. 开源共建",
      durationInFrames: 150,
      subtitle: "未来：云端流水线、自动缺陷归因、开源共建",
      audioPath: "voiceover/surfin-smart-auto/block-06.mp3"
    },
    {
      type: "title",
      text: "谢谢观看！\nSurfinSmartAuto Team",
      durationInFrames: 90,
      subtitle: "谢谢观看！",
      audioPath: "voiceover/surfin-smart-auto/block-07.mp3"
    }
  ]
};
