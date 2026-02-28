
import React from 'react';
import { AbsoluteFill, useVideoConfig } from 'remotion';

export const Subtitle: React.FC<{ text: string }> = ({ text }) => {
  const { width } = useVideoConfig();

  if (!text) return null;

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 50,
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '10px 30px',
          borderRadius: 10,
          fontSize: 32,
          fontWeight: 600,
          fontFamily: 'sans-serif',
          textAlign: 'center',
          maxWidth: width * 0.8,
          textShadow: '0 2px 4px rgba(0,0,0,0.5)',
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
};
