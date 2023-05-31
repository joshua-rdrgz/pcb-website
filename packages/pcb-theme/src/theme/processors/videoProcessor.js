import { loadable } from "frontity";

const VideoTab = loadable(() => import("./components/Video"));

const videoProcessor = {
  name: "Video",
  priority: 5,
  test: ({ node }) => {
    return node?.props?.className?.includes(
      "wp-block-group" && "video-section"
    );
  },
  processor: ({ node }) => {
    const nodeClasses = node?.props?.className;
    const backgroundColor = nodeClasses.includes("light") ? "light" : "dark";

    const content = node?.children[0]?.children;

    const sectionHeader = content[0]?.children[0]?.content;

    const videoContent = content.slice(1).map((videoBlock) => {
      const videoBlockContent = videoBlock?.children[0]?.children;

      const ifVideoHasHeader = videoBlockContent[0].component.includes("h");

      const videoBlockHeader = ifVideoHasHeader
        ? videoBlockContent[0]?.children[0].content
        : null;

      const video = ifVideoHasHeader
        ? videoBlockContent[1]?.children[0]?.children[0].props
        : videoBlockContent[0]?.children[0]?.children[0].props;

      const videoBlockDescription = videoBlockContent[2]
        ? videoBlockContent[2]?.children[0].content
        : ifVideoHasHeader
        ? null
        : videoBlockContent[1]?.children[0].content;

      return [videoBlockHeader, video, videoBlockDescription];
    });

    return {
      component: VideoTab,
      props: {
        backgroundColor,
        sectionHeader,
        videoContent,
      },
    };
  },
};

export default videoProcessor;
