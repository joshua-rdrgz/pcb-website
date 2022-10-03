import React from 'react';

import ContactTab from './components/Contact';

const contactProcessor = {
  name: "Contact",
  priority: 5,
  test: ({ node }) => {
    return (
      node?.props?.className?.includes("wp-block-group" && "contact")
    );
  },
  processor: ({ state, node }) => {
    const shortHand = node?.children[0]?.children;
    
    const sectionHeader = shortHand[0]?.children[0]?.content;
    const secondItem = shortHand[1]?.children[0]?.content;
    const thirdItem =
      state.theme.isLandingPage ?
      shortHand[2]?.children[0]?.children[0]?.props :
      shortHand[2]?.children[0]?.props;
    const contact = shortHand[3]?.props;

    return {
      component: ContactTab,
      props: {
        sectionHeader,
        secondItem,
        thirdItem,
        contact
      }
    }
  }
}

export default contactProcessor;
