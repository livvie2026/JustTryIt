import { Composition } from "remotion";
import { MyAnimation as BarChartAnimation } from "../skills/remotion/rules/assets/charts-bar-chart";
import { MyAnimation as TypewriterAnimation } from "../skills/remotion/rules/assets/text-animations-typewriter";
import { MyAnimation as WordHighlightAnimation } from "../skills/remotion/rules/assets/text-animations-word-highlight";
import { ArticleVideo } from "./compositions/ArticleVideo";
import { articleDemo } from "./data/article-demo";
import { debriefingWei } from "./data/debriefing-wei";
import { surfinSmartAuto } from "./data/surfin-smart-auto";

export const RemotionRoot = () => {
  const articleDuration = articleDemo.blocks.reduce(
    (acc, block) => acc + block.durationInFrames,
    0
  );

  const debriefingWeiDuration = debriefingWei.blocks.reduce(
    (acc, block) => acc + block.durationInFrames,
    0
  );

  const surfinSmartAutoDuration = surfinSmartAuto.blocks.reduce(
    (acc, block) => acc + block.durationInFrames,
    0
  );

  return (
    <>
      <Composition
        id="BarChart"
        component={BarChartAnimation}
        durationInFrames={120}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="Typewriter"
        component={TypewriterAnimation}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          fullText: "From prompt to motion graphics. This is Remotion.",
          pauseAfter: "From prompt to motion graphics.",
        }}
      />
      <Composition
        id="WordHighlight"
        component={WordHighlightAnimation}
        durationInFrames={90}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="ArticleVideo"
        component={ArticleVideo}
        durationInFrames={articleDuration}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{
          article: articleDemo,
        }}
      />
      <Composition
        id="DebriefingWei"
        component={ArticleVideo}
        durationInFrames={debriefingWeiDuration}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{
          article: debriefingWei,
        }}
      />
      <Composition
        id="SurfinSmartAuto"
        component={ArticleVideo}
        durationInFrames={surfinSmartAutoDuration}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{
          article: surfinSmartAuto,
        }}
      />
    </>
  );
};
