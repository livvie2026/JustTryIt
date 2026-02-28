
import { Article } from '../types/schema';

export const debriefingWei: Article = {
  title: "2023年终述职-魏丽惠",
  blocks: [
    {
      type: "title",
      text: "2023年终述职汇报\n\n汇报人：魏丽惠\n部门：研发效能部",
      durationInFrames: 120
    },
    {
      type: "text",
      text: "一、年度核心工作回顾\n\n1. 完成自动化测试平台 v2.0 升级\n2. 引入 CI/CD 流程，发布效率提升 40%\n3. 团队技术分享 12 场，沉淀文档 50+",
      durationInFrames: 180
    },
    {
      type: "chart",
      title: "测试用例覆盖率增长趋势",
      data: [
        { "label": "Q1", "value": 65 },
        { "label": "Q2", "value": 72 },
        { "label": "Q3", "value": 85 },
        { "label": "Q4", "value": 93 }
      ],
      yAxisSteps: [60, 80, 100],
      minValue: 50,
      maxValue: 100,
      durationInFrames: 150
    },
    {
      type: "highlight",
      text: "展望2024：\n\n持续深化工程效能，打造极致交付体验",
      highlightWord: "极致",
      durationInFrames: 120
    },
    {
      type: "text",
      text: "感谢聆听！",
      durationInFrames: 90
    }
  ]
};
