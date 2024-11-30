import { loadable } from "frontity";

const FAQTab = loadable(() => import("./components/FAQ"));

const faqProcessor = {
  name: "FAQ",
  priority: 5,
  test: ({ node }) => {
    return node?.props?.className?.includes("wp-block-group" && "faqs");
  },
  processor: ({ node, state }) => {
    const shortHand = node?.children[0]?.children;

    // section header, always will be first
    const sectionHeader = shortHand[0]?.children[0]?.content;

    const sectionDescription = shortHand[1]?.children[0]?.content;

    // FAQs
    const faqsContainer = shortHand.slice(2);

    return {
      component: FAQTab,
      props: {
        state,
        sectionHeader,
        sectionDescription,
        faqsContainer,
      },
    };
  },
};

export default faqProcessor;
