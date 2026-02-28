import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import { surfinSmartAuto } from '../src/data/surfin-smart-auto';
import { EdgeTTS } from 'node-edge-tts';

// 配置
const VOICE = 'zh-CN-XiaoxiaoNeural'; // 中文女声
const OUTPUT_DIR = 'public/voiceover/surfin-smart-auto';
const FPS = 30;

interface VoiceoverSegment {
  blockIndex: number;
  text: string;
  audioPath: string;
}

// 创建 EdgeTTS 实例
const tts = new EdgeTTS({
  voice: VOICE,
  rate: '+0%',      // 语速: 0% 表示正常
  pitch: '+0Hz',    // 音高
  volume: '+0%'     // 音量
});

// 使用 Edge-TTS 生成语音
async function generateSpeech(text: string, filename: string): Promise<void> {
  try {
    // 确保输出目录存在
    if (!existsSync(OUTPUT_DIR)) {
      mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    
    const outputPath = join(OUTPUT_DIR, filename);
    
    // 使用 node-edge-tts API
    await tts.ttsPromise(text, outputPath);

    console.log(`✅ Generated: ${filename}`);
  } catch (error) {
    console.error(`❌ Error generating ${filename}:`, error);
    throw error;
  }
}

// 主生成函数
async function generateAllVoiceovers() {
  console.log('🎙️  Starting voiceover generation with Edge-TTS...\n');
  console.log(`📢 Using voice: ${VOICE}\n`);

  const segments: VoiceoverSegment[] = [];

  for (let i = 0; i < surfinSmartAuto.blocks.length; i++) {
    const block = surfinSmartAuto.blocks[i];
    
    // 只为有字幕的块生成语音
    if (block.subtitle) {
      const filename = `block-${i.toString().padStart(2, '0')}.mp3`;
      const audioPath = `voiceover/surfin-smart-auto/${filename}`;
      
      await generateSpeech(block.subtitle, filename);
      
      segments.push({
        blockIndex: i,
        text: block.subtitle,
        audioPath,
      });
    }
  }

  console.log(`\n🎉 Generated ${segments.length} voiceover segments`);
  console.log('📝 Next steps:');
  console.log('1. Run: npm run dev to preview the video');
  console.log('2. Run: npm run build to render the final video');
}

// 执行生成
generateAllVoiceovers().catch((error) => {
  console.error('❌ Error generating voiceovers:', error);
  process.exit(1);
});
