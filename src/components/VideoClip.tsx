
import React from 'react';
import { AbsoluteFill, Video, staticFile } from 'remotion';
import { VideoBlock } from '../types/schema';

const COLOR_BG = "#000000";
const COLOR_TEXT = "#ffffff";
const FONT_SIZE = 48;

export const VideoClip: React.FC<VideoBlock> = ({ src, title }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLOR_BG }}>
      {title && (
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 0,
            width: '100%',
            textAlign: 'center',
            color: COLOR_TEXT,
            fontSize: FONT_SIZE,
            fontWeight: 600,
            zIndex: 1,
            textShadow: '0 2px 4px rgba(0,0,0,0.8)',
          }}
        >
          {title}
        </div>
      )}
      <Video
        src={staticFile(src)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
    </AbsoluteFill>
  );
};
