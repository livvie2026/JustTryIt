
export type BlockType = 'title' | 'text' | 'chart' | 'highlight' | 'video' | 'image';

export interface BaseBlock {
  type: BlockType;
  durationInFrames: number;
  subtitle?: string; // 新增：每个 Block 可以带字幕
  audioPath?: string; // 新增：每个 Block 可以带语音音频路径
}

export interface TitleBlock extends BaseBlock {
  type: 'title';
  text: string;
}

export interface TextBlock extends BaseBlock {
  type: 'text';
  text: string;
}

export interface HighlightBlock extends BaseBlock {
  type: 'highlight';
  text: string;
  highlightWord: string;
}

export interface ChartDataPoint {
  label: string;
  value: number;
}

export interface ChartBlock extends BaseBlock {
  type: 'chart';
  title: string;
  data: ChartDataPoint[];
  yAxisSteps: number[];
  minValue: number;
  maxValue: number;
}

export interface VideoBlock extends BaseBlock {
  type: 'video';
  src: string; // 视频文件路径
  title?: string; // 视频标题
}

export interface ImageBlock extends BaseBlock {
  type: 'image';
  src: string; // 图片文件路径
  title?: string; // 图片标题
}

export type Block = TitleBlock | TextBlock | HighlightBlock | ChartBlock | VideoBlock | ImageBlock;

export interface Article {
  title: string;
  blocks: Block[];
}
