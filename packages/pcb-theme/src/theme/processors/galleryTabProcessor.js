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

    const isPPFGallery = node?.props?.id?.includes("ppf-gallery");

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
    const buttonOneContent =
      content?.at(-1)?.children[0]?.children[0]?.children[0].content;
    const buttonOneFontSize = content?.at(-1)?.children[0]?.props?.css?.styles;
    const buttonOneLink = content
      ?.at(-1)
      ?.children[0].children[0]?.props?.href.split("/")
      .reverse()[1];

    const buttonTwoContent =
      content?.at(-1)?.children[1]?.children[0]?.children[0].content;
    const buttonTwoLink = content
      ?.at(-1)
      ?.children[1]?.children[0]?.props?.href?.split("/")
      .slice(3)
      .join("/");
    console.log(buttonTwoLink);

    return {
      component: Gallery,
      props: {
        state,
        sectionHeader,
        galleryContent,
        buttonOneContent,
        buttonOneFontSize,
        buttonOneLink,
        buttonTwoContent,
        buttonTwoLink,
        isPPFGallery,
      },
    };
  },
};

export default galleryTabProcessor;
