import Herobox from "../components/herobox/Herobox";
import gatherSectionContent from "../helpers/gatherSectionContent";

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
    console.log(sectionContent);

    return {
      component: Herobox,
      props: {
        content: sectionContent,
      },
    };
  },
};

export default heroboxProcessor;
