import React from "react";

import VideoTab from "./components/Video";

const videoProcessor = {
  name: "Video",
  priority: 5,
  test: ({ node }) => {
    return (
      node?.props?.className?.includes("wp-block-group" && "video")
    );
  },
  processor: ({ node }) => {
    const nodeClasses = node?.props?.className;
    const backgroundColor = nodeClasses.includes('light')
      ? 'light'
      : 'dark';

    const shortHand = node?.children[0]?.children;

    const sectionHeader = shortHand[0]?.children[0]?.content;

    const video = shortHand[1]?.children[0]?.children[0]?.props

    return {
      component: VideoTab,
      props: {
        backgroundColor,
        sectionHeader,
        video,
      },
    };
  },
};

export default videoProcessor;
