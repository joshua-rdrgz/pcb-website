import React from 'react';

import ContactTab from '../components/contact/Contact';
import LandingContactTab from '../components/contact/LandingContact';

const contactProcessor = {
  name: "Contact",
  priority: 5,
  test: ({ node }) => {
    return (
      node?.props?.className?.includes("wp-block-group" && "contact")
    );
  },
  processor: ({ node }) => {
    const isLandingPage = node?.props?.className?.includes("isLandingPage");
    const contactID = node?.props?.id;
    const shortHand = node?.children[0]?.children;
    
    const sectionHeader = shortHand[0]?.children[0]?.content;
    const secondItem = shortHand[1]?.children[0]?.content;
    const thirdItem =
      isLandingPage ?
      shortHand[2]?.children[0]?.children[0]?.props :
      shortHand[2]?.children[0]?.props;
    const contact = shortHand[3]?.props;

    const props = {
      sectionHeader,
      secondItem,
      thirdItem,
      contact,
      contactID,
    };

    if (isLandingPage) {
      return {
        component: LandingContactTab,
        props,
      }
    } else {
      return {
        component: ContactTab,
        props,
      }
    }
  }
}

export default contactProcessor;
