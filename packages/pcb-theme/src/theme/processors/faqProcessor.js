import React, { useState } from "react";
import { styled, css } from "frontity";

import FAQTab from './components/FAQ';

const faqProcessor = {
  name: "FAQ",
  priority: 5,
  test: ({ node }) => {
    return node?.props?.className?.includes("wp-block-group" && "faq");
  },
  processor: ({ node, state }) => {
    const shortHand = node?.children[0]?.children;

    // section header, always will be first
    const sectionHeader = shortHand[0]?.children[0]?.content;

    // FAQs
    const faqs = shortHand.slice(1);
    return {
      component: FAQTab,
      props: {
        state,
        shortHand,
        sectionHeader,
        faqs,
      },
    };
  },
};

export default faqProcessor;
