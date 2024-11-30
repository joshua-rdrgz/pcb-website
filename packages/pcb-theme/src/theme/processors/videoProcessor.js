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

    const sectionDescription = content[1]?.children[0]?.content;

    const videoContent = content.slice(2).map((videoBlock) => {
      const videoBlockContent = videoBlock?.children[0]?.children;

      return {
        videoBlockHeader: videoBlockContent[0]?.children[0]?.content,
        videoBlockDescription: videoBlockContent[1]?.children[0]?.content,
        video: videoBlockContent[2]?.children[0]?.children[0].props,
      };
    });

    return {
      component: VideoTab,
      props: {
        backgroundColor,
        sectionHeader,
        sectionDescription,
        videoContent,
      },
    };
  },
};

export default videoProcessor;
