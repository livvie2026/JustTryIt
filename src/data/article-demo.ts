
import { Article } from '../types/schema';

export const articleDemo: Article = {
  title: "2024 Market Report",
  blocks: [
    {
      type: "title",
      text: "2024 Gold Price Trend",
      durationInFrames: 90
    },
    {
      type: "text",
      text: "The market has shown significant growth this year.",
      durationInFrames: 120
    },
    {
      type: "chart",
      title: "Monthly Price",
      data: [
        { "label": "Jan", "value": 2039 },
        { "label": "Mar", "value": 2160 },
        { "label": "May", "value": 2327 },
        { "label": "Jul", "value": 2426 },
        { "label": "Sep", "value": 2634 },
        { "label": "Nov", "value": 2672 }
      ],
      yAxisSteps: [2000, 2400, 2800],
      minValue: 2000,
      maxValue: 2800,
      durationInFrames: 150
    },
    {
      type: "highlight",
      text: "We expect this trend to continue.",
      highlightWord: "continue",
      durationInFrames: 90
    }
  ]
};
