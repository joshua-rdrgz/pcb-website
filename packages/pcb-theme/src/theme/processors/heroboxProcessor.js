import { loadable } from "frontity";
import gatherSectionContent from "../helpers/gatherSectionContent";

const Herobox = loadable(() => import("../components/herobox/Herobox"));

const heroboxProcessor = {
  name: "herobox",
  priority: 5,
  test: ({ node }) => {
    return (
      node.props?.className?.includes("wp-block-group") &&
      node?.children[0]?.children[0]?.component === "h1"
    );
  },
  processor: ({ node }) => {
    const sectionContent = gatherSectionContent(node);

    return {
      component: Herobox,
      props: {
        content: sectionContent,
      },
    };
  },
};

export default heroboxProcessor;
