import Gallery from "./components/Gallery";

const galleryTabProcessor = {
  name: "Gallery Tab",
  priority: 5,
  test: ({ node }) => {
    return (
      node?.props?.className?.includes("wp-block-group") &&
      node?.children[0]?.children[1]?.props?.className?.includes(
        "wp-block-gallery"
      )
    );
  },
  processor: ({ node, state }) => {
    const content = node?.children[0]?.children;

    // section header, always will be first
    const sectionHeader = content[0]?.children[0]?.content;

    // Gallery Content
    const galleryWrapper = content[1].children;
    const galleryContent = Object.values(galleryWrapper).map((img) => {
      return {
        img: img.children[0].props,
        caption: img.children[1]?.children[0].content,
      };
    });

    // Button Content
    const buttonContent =
      content?.at(-1)?.children[0]?.children[0]?.children[0].content;
    const buttonFontSize = content?.at(-1)?.children[0]?.props?.css?.styles;
    const buttonLink = content
      ?.at(-1)
      ?.children[0].children[0]?.props?.href.split("/")
      .reverse()[1];

    return {
      component: Gallery,
      props: {
        state,
        sectionHeader,
        galleryContent,
        buttonContent,
        buttonFontSize,
        buttonLink,
      },
    };
  },
};

export default galleryTabProcessor;
