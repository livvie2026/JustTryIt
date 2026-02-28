import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import React from "react";
import { TextBlock, TitleBlock } from "../types/schema";

const COLOR_BG = "#ffffff";
const COLOR_TEXT = "#000000";
const FONT_SIZE = 72;
const FONT_WEIGHT = 700;
const CHAR_FRAMES = 2;
const CURSOR_BLINK_FRAMES = 16;

const getTypedText = ({
  frame,
  fullText,
  charFrames,
}: {
  frame: number;
  fullText: string;
  charFrames: number;
}): string => {
  const typedChars = Math.floor(frame / charFrames);
  return fullText.slice(0, typedChars);
};

const Cursor: React.FC<{
  frame: number;
  blinkFrames: number;
  symbol?: string;
}> = ({ frame, blinkFrames, symbol = "\u258C" }) => {
  const opacity = interpolate(
    frame % blinkFrames,
    [0, blinkFrames / 2, blinkFrames],
    [1, 0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return <span style={{ opacity }}>{symbol}</span>;
};

export const Typewriter: React.FC<TextBlock | TitleBlock> = ({ text }) => {
  const frame = useCurrentFrame();

  const typedText = getTypedText({
    frame,
    fullText: text,
    charFrames: CHAR_FRAMES,
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLOR_BG,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 60,
      }}
    >
      <div
        style={{
          color: COLOR_TEXT,
          fontSize: FONT_SIZE,
          fontWeight: FONT_WEIGHT,
          fontFamily: "sans-serif",
          textAlign: "center",
          whiteSpace: "pre-wrap",
        }}
      >
        <span>{typedText}</span>
        <Cursor frame={frame} blinkFrames={CURSOR_BLINK_FRAMES} />
      </div>
    </AbsoluteFill>
  );
};
