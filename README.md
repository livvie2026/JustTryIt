# SurfinSmartAuto Video Generator

本项目是一个基于 **Remotion** 的自动化视频生成工具，专为生成技术分享、项目汇报等演示视频而设计。它能够将结构化的 JSON 数据转化为包含动画、图表、演示录屏和语音解说的专业视频。

## 🚀 核心功能
*   **验证test：** 测试项目是否正确配置，并检查是否存在错误或缺失的配置项。
*   **积木式编排**：通过简单的 JSON 配置即可定义视频内容（标题、文本、高亮、图表、视频、图片）。
*   **多媒体支持**：无缝集成 MP4 演示录屏、PNG 架构图等素材。
*   **自动语音解说**：支持为每个场景（Block）配置独立的语音解说文件，并自动同步播放。
*   **可视化预览**：提供基于 Web 的实时预览编辑器 (Remotion Studio)。
*   **一键导出 MP4**：通过命令行快速渲染生成高清 MP4 视频文件。

## 🛠️ 技术栈

*   **框架**: [Remotion](https://www.remotion.dev/) (基于 React 的视频生成引擎)
*   **语言**: TypeScript / React
*   **运行时**: Node.js

## 📦 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动预览 (开发模式)

```bash
npm run dev
```
启动后，浏览器会自动打开 `http://localhost:3000`。
在左侧列表中选择 **`SurfinSmartAuto`** 即可查看演示效果。

### 3. 生成视频 (导出 MP4)

使用以下命令将 `SurfinSmartAuto` 组合渲染为 MP4 文件：

```bash
npm run build -- src/index.ts SurfinSmartAuto out/SurfinSmartAuto.mp4
```
*   生成的视频将保存在 `out/SurfinSmartAuto.mp4`。
*   渲染过程可能需要几分钟，取决于机器性能和视频长度。

## 📂 项目结构

```
.
├── public/
│   ├── assets/             # 静态资源 (图片、视频素材)
│   └── voiceover/          # 语音解说文件 (mp3)
├── src/
│   ├── components/         # 基础组件 (Title, Text, VideoClip, etc.)
│   ├── compositions/       # 视频组合逻辑 (ArticleVideo)
│   ├── data/               # 视频脚本数据 (JSON)
│   │   └── surfin-smart-auto.ts  # SurfinSmartAuto 的核心脚本
│   ├── types/              # TypeScript 类型定义 (Schema)
│   ├── Root.tsx            # 注册所有视频组合的入口
│   └── index.ts            # Remotion 渲染入口
└── package.json
```

## 📝 如何修改视频内容？

1.  打开 `src/data/surfin-smart-auto.ts`。
2.  修改 `blocks` 数组中的内容。
    *   **修改文字**: 更新 `text` 字段。
    *   **替换素材**: 更新 `src` 字段（指向 `public/assets/` 下的文件）。
    *   **调整时长**: 修改 `durationInFrames` (30 frames = 1秒)。
    *   **配音文件**: 修改 `audioPath` 字段。

示例：
```typescript
{
  type: "video",
  src: "/assets/demo_new.mp4", // 替换新视频
  title: "新的演示片段",
  durationInFrames: 300,
  audioPath: "voiceover/new_audio.mp3"
}
```

## 🎙️ 关于语音生成

本项目包含一个语音生成脚本（基于 Edge TTS），可以根据 `src/data/` 中的字幕自动生成 MP3 文件。

**生成/更新语音：**
```bash
npm run voiceover
```
*该命令会扫描数据文件中的 `subtitle` 字段，调用 TTS 服务生成音频并保存到 `public/voiceover/` 目录。*

---
**SurfinSmartAuto Team**
