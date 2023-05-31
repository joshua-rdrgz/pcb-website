import { loadable } from "frontity";

const ThankYou = loadable(() => import("./components/ThankYou"));

const thankYouProcessor = {
  name: "Thank You Page",
  priority: 5,
  test: ({ node }) => node?.props?.className?.includes("thank-you"),
  processor: ({ node }) => {
    const content = node?.children[0]?.children;

    const header = content[0]?.children[0]?.content;
    const subHeader = content[1]?.children[0]?.content;
    const image = content[2]?.children[0]?.props;

    return {
      component: ThankYou,
      props: {
        header,
        subHeader,
        image,
      },
    };
  },
};

export default thankYouProcessor;
