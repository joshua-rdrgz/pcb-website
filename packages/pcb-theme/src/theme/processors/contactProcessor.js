import { loadable } from "frontity";

const ContactTab = loadable(() => import("../components/contact/Contact"));
const LandingContactTab = loadable(() =>
  import("../components/contact/LandingContact")
);

const contactProcessor = {
  name: "Contact",
  priority: 5,
  test: ({ node }) => {
    return node?.props?.className?.includes("wp-block-group" && "contact");
  },
  processor: ({ node }) => {
    const isLandingPage = node?.props?.className?.includes("isLandingPage");
    const contactID = node?.props?.id;
    const nodeChildren = node?.children[0]?.children;

    const props = {};

    if (isLandingPage) {
      props.contactID = contactID;
      props.sectionHeader = nodeChildren[0]?.children[0]?.content;
      props.sectionDescription = nodeChildren[1]?.children[0]?.content;
      props.video = nodeChildren[2]?.children[0]?.children[0]?.props;
      props.tintWizForm = nodeChildren[3]?.props;
    }

    if (!isLandingPage) {
      props.sectionHeader = nodeChildren[0]?.children[0]?.content;
      props.sectionDescription = nodeChildren[1]?.children[0]?.content;
      props.contactContentHeader = nodeChildren[2]?.children[0]?.content;
      props.contactContentImg = nodeChildren[3]?.children[0]?.props;
      props.tintWizForm = nodeChildren[4]?.props;
    }

    if (isLandingPage) {
      return {
        component: LandingContactTab,
        props,
      };
    } else {
      return {
        component: ContactTab,
        props,
      };
    }
  },
};

export default contactProcessor;
