import { loadable } from "frontity";

const ServiceCards = loadable(() => import("../components/cards/Cards"));

const cardsProcessor = {
  name: "Service Cards",
  priority: 5,
  test: ({ node }) => {
    return node?.props?.className?.includes("service-cards");
  },
  processor: ({ node }) => {
    const content = node?.children[0]?.children;
    const isDarkTheme = node?.props?.className?.includes("dark");
    const isIcon = node?.props?.className?.includes("icon");
    const isImageBg = node?.props?.className?.includes("image-bg");

    const sectionHeader = content[0]?.children[0]?.content;

    const cards = [];
    content?.slice(1, -1).map((card) => {
      const cardContent = card.children[0].children;
      const title = cardContent[0].children[0]?.content;
      const image = cardContent[1].children[0]?.props;
      const description = cardContent[2].children[0]?.content;
      const button =
        cardContent[3]?.children.length !== 0 && cardContent[3]?.children;

      const buttonContent =
        button && button[0]?.children[0]?.children[0]?.content;
      const buttonLink =
        button && button[0]?.children[0]?.props.href.split("/").reverse()[1];
      cards.push({
        title,
        image,
        description,
        button: {
          content: buttonContent,
          link: buttonLink,
        },
      });
    });

    const buttons = [];
    content?.at(-1)?.children.map((button) => {
      const buttonContent = button.children[0].children[0].content;
      const buttonLink = buttonContent.includes("972")
        ? "tel:(972)%20295-7068"
        : button.children[0].props.href.split("/").slice(3).join("/");
      buttons.push({ buttonContent, buttonLink });
    });

    return {
      component: ServiceCards,
      props: {
        sectionHeader,
        cards,
        buttons,
        isDarkTheme,
        isIcon,
        isImageBg,
      },
    };
  },
};

export default cardsProcessor;
