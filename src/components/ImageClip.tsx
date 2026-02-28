
import React from 'react';
import { AbsoluteFill, Img, staticFile } from 'remotion';
import { ImageBlock } from '../types/schema';

const COLOR_BG = "#ffffff";
const COLOR_TEXT = "#000000";
const FONT_SIZE = 48;

export const ImageClip: React.FC<ImageBlock> = ({ src, title }) => {
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
            textShadow: '0 1px 2px rgba(255,255,255,0.8)',
          }}
        >
          {title}
        </div>
      )}
      <Img
        src={staticFile(src)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          marginTop: title ? 60 : 0,
        }}
      />
    </AbsoluteFill>
  );
};
