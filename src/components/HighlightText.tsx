import { loadFont } from "@remotion/google-fonts/Inter";
import React from "react";
import {
  AbsoluteFill,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { HighlightBlock } from "../types/schema";

const COLOR_BG = "#ffffff";
const COLOR_TEXT = "#000000";
const COLOR_HIGHLIGHT = "#A7C7E7";
const FONT_SIZE = 72;
const FONT_WEIGHT = 700;
const HIGHLIGHT_START_FRAME = 30;
const HIGHLIGHT_WIPE_DURATION = 18;

const { fontFamily } = loadFont();

const Highlight: React.FC<{
  word: string;
  color: string;
  delay: number;
  durationInFrames: number;
}> = ({ word, color, delay, durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const highlightProgress = spring({
    fps,
    frame,
    config: { damping: 200 },
    delay,
    durationInFrames,
  });
  const scaleX = Math.max(0, Math.min(1, highlightProgress));

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "50%",
          height: "1.05em",
          transform: `translateY(-50%) scaleX(${scaleX})`,
          transformOrigin: "left center",
          backgroundColor: color,
          borderRadius: "0.18em",
          zIndex: 0,
        }}
      />
      <span style={{ position: "relative", zIndex: 1 }}>{word}</span>
    </span>
  );
};

export const HighlightText: React.FC<HighlightBlock> = ({
  text,
  highlightWord,
}) => {
  const highlightIndex = text.indexOf(highlightWord);
  const hasHighlight = highlightIndex >= 0;
  const preText = hasHighlight ? text.slice(0, highlightIndex) : text;
  const postText = hasHighlight
    ? text.slice(highlightIndex + highlightWord.length)
    : "";

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLOR_BG,
        alignItems: "center",
        justifyContent: "center",
        fontFamily,
        padding: 60,
      }}
    >
      <div
        style={{
          color: COLOR_TEXT,
          fontSize: FONT_SIZE,
          fontWeight: FONT_WEIGHT,
          textAlign: "center",
          whiteSpace: "pre-wrap",
        }}
      >
        {hasHighlight ? (
          <>
            <span>{preText}</span>
            <Highlight
              word={highlightWord}
              color={COLOR_HIGHLIGHT}
              delay={HIGHLIGHT_START_FRAME}
              durationInFrames={HIGHLIGHT_WIPE_DURATION}
            />
            <span>{postText}</span>
          </>
        ) : (
          <span>{text}</span>
        )}
      </div>
    </AbsoluteFill>
  );
};
