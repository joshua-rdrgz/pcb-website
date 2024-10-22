import { loadable } from "frontity";

const TestimonialComponent = loadable(() =>
  import("../components/testimonials/TestimonialComponent")
);

const testimonialProcessor = {
  name: "testimonial",
  priority: 5,
  test: ({ node }) => {
    return (
      (node?.props?.className?.includes("wp-block-group") &&
        node?.children[0]?.children[1]?.props?.className?.includes(
          "ti-goog"
        )) ||
      node?.props?.className?.includes("reactReviews")
    );
  },
  processor: ({ node }) => {
    const content = node?.children[0]?.children;

    // HTML ID for Reviews Page Herobox to target
    const anchorHTML = node?.props?.id;

    const hasDescription = content[1]?.component === "p";

    // section header + description, always will be first
    const sectionHeader = content[0]?.children[0]?.content;
    const sectionDescription =
      hasDescription && content[1]?.children[0]?.content;

    // Button Content
    const buttonContent =
      content?.at(-1)?.children[0]?.children[0]?.children[0].content;
    const buttonLink = content
      ?.at(-1)
      ?.children[0].children[0]?.props?.href?.split("/")
      .slice(3)
      .join("/");

    return {
      component: TestimonialComponent,
      props: {
        anchorHTML,
        sectionHeader,
        sectionDescription,
        buttonContent,
        buttonLink,
      },
    };
  },
};

export default testimonialProcessor;
