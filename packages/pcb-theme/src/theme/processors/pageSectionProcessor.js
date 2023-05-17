import PageSection from "../components/page-content/PageSection";
import gatherSectionContent from "../helpers/gatherSectionContent";

const pageSectionProcessor = {
  name: "Page Section Processor",
  priority: 10,
  test: ({ node }) => {
    return node?.props?.className?.includes("wp-block-group" && "page-section");
  },
  processor: ({ node }) => {
    const sectionContent = gatherSectionContent(node);

    console.log(sectionContent);

    return {
      component: PageSection,
      props: {
        content: sectionContent,
        tag: "section",
      },
    };
  },
};

export default pageSectionProcessor;
