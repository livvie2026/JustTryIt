import React from 'react';
import { AbsoluteFill, Series } from 'remotion';
import { Audio } from '@remotion/media';
import { staticFile } from 'remotion';
import { Article } from '../../types/schema';
import { BarChart } from '../../components/BarChart';
import { Typewriter } from '../../components/Typewriter';
import { HighlightText } from '../../components/HighlightText';
import { VideoClip } from '../../components/VideoClip';
import { ImageClip } from '../../components/ImageClip';
import { Subtitle } from '../../components/Subtitle';

export const ArticleVideo: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <AbsoluteFill>
      <Series>
        {article.blocks.map((block, index) => {
          return (
            <Series.Sequence key={index} durationInFrames={block.durationInFrames}>
              {block.type === 'title' && <Typewriter {...block} />}
              {block.type === 'text' && <Typewriter {...block} />}
              {block.type === 'highlight' && <HighlightText {...block} />}
              {block.type === 'chart' && <BarChart {...block} />}
              {block.type === 'video' && <VideoClip {...block} src={block.src} title={block.title} />}
              {block.type === 'image' && <ImageClip {...block} src={block.src} title={block.title} />}
              {block.subtitle && <Subtitle text={block.subtitle} />}
              
              {/* 播放对应的音频 */}
              {block.audioPath && (
                <Audio
                  src={staticFile(block.audioPath)}
                  volume={0.8}
                />
              )}
            </Series.Sequence>
          );
        })}
      </Series>
    </AbsoluteFill>
  );
};
