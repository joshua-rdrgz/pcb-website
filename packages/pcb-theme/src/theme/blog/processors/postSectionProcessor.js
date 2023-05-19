import PostContent from "../post-components/PostContent";
import gatherSectionContent from "../../helpers/gatherSectionContent";

const postSectionProcessor = {
  name: "Post Section Processor",
  priority: 10,
  test: ({ node }) => {
    return node?.props?.className?.includes("wp-block-group" && "post-section");
  },
  processor: ({ node }) => {
    const sectionContent = gatherSectionContent(node);
    const isHighlightedSection = node.props.className.includes(
      "post-section-highlighted"
    );

    return {
      component: PostContent,
      props: {
        content: sectionContent,
        isHighlightedSection,
        tag: "section",
      },
    };
  },
};

export default postSectionProcessor;
