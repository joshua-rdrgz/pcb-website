import { loadable } from "frontity";

const GalleryTab = loadable(() => import("../components/gallery/GalleryTab"));

const galleryTabProcessor = {
  name: "Gallery Tab",
  priority: 5,
  test: ({ node }) => {
    return node?.props?.className?.includes("reactGallery");
  },
  processor: ({ node }) => {
    const content = node?.children[0]?.children;
    const hasAside = node?.props?.className?.includes("hasAside");
    const hasPPFID = node?.props?.id;

    // header material OR aside content
    let sectionHeader;
    let asideContent;
    if (hasAside) {
      asideContent = {
        heading: content[0]?.children[0]?.content,
        description: content[1]?.children[0]?.content,
      };
    } else {
      sectionHeader = content[0]?.children[0]?.content;
    }

    // Gallery Content
    const galleryContent = content[hasAside ? 2 : 1].children.map((img) => {
      return {
        img: img.children[0].props,
        caption: img.children[1]?.children[0].content,
      };
    });

    // Button Content
    const hasButtons = content
      ?.at(-1)
      ?.props?.className?.includes("wp-block-buttons");
    const buttons =
      hasButtons &&
      content?.at(-1)?.children.map((button) => {
        return {
          content: button?.children[0]?.children[0]?.content,
          link: button?.children[0]?.props?.href?.split("/").slice(3).join("/"),
        };
      });

    const props = hasAside
      ? {
          asideContent,
          galleryContent,
          buttons,
          hasAside,
        }
      : {
          sectionHeader,
          galleryContent,
          buttons,
          hasAside,
          hasPPFID,
        };

    return {
      component: GalleryTab,
      props,
    };
  },
};

export default galleryTabProcessor;
