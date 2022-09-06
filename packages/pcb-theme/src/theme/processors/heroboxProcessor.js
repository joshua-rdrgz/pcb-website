import Herobox from "./components/herobox/Herobox";

const heroboxProcessor = {
  name: "herobox",
  priority: 5,
  test: ({ node }) => {
    return (
      node.props?.className?.includes("wp-block-group") &&
      node?.children[0]?.children[0]?.component === "h1"
    );
  },
  processor: ({ node, state }) => {
    // for console, and to shorten digging
    const loggedNode = node.children[0].children;

    // h1, must always be present and always be 1st.
    const primaryHeadingContent =
      node?.children[0]?.children[0]?.children[0]?.content;

    // slot 2, either heading or a button
    const slot2Tag = loggedNode[1].component.includes("h")
      ? loggedNode[1].component
      : "Link";
    const slot2Content =
      slot2Tag === "Link"
        ? loggedNode[1].children[0].children[0].children[0].content
        : loggedNode[1].children[0].content;

    // slot 3, a button if slot 2 is a heading
    const slot3Tag = slot2Tag.includes("h") ? "Link" : null;
    const slot3Content =
      slot3Tag === "Link"
        ? loggedNode[2].children[0].children[0].children[0].content
        : null;

    // button exclusives
    const buttonFontSize =
      node?.children[0]?.children[slot2Tag === "Link" ? 1 : 2]?.children[0]
        ?.props?.css?.styles;
    const buttonLink =
      node?.children[0]?.children[slot2Tag === "Link" ? 1 : 2]?.children[0]
        ?.children[0]?.props.href;

    return {
      component: Herobox,
      props: {
        primaryHeadingContent,
        slot2Tag,
        slot2Content,
        slot3Tag,
        slot3Content,
        buttonFontSize,
        buttonLink,
        state,
      },
    };
  },
};

export default heroboxProcessor;
