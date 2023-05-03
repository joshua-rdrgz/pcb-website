const processChildNode = (node) => {
  // *
  // CHECK IF NODE HAS NO CHILDREN (LEAF NODES)
  // *
  if (!node.children || node.children.length === 0) {
    const typeOfLeafNode = node.type;
    if (typeOfLeafNode === "text") {
      return {
        tag: node.parent.component,
        content: node.content,
      };
    }
    if (typeOfLeafNode === "element") {
      return {
        tag: node.component,
        content: node.props,
      };
    }
    return; // JUST IN CASE IT'S NEITHER "TEXT" OR "ELEMENT"
  }

  // *
  // HANDLE CHILDREN RECURSIVELY
  // *
  if (node.children.length >= 1) {
    const childrenContent = [];
    for (const childNode of node.children) {
      const childContent = processChildNode(childNode);
      childrenContent.push(childContent);
    }

    // *
    // CURRENT ELEMENT IS A PARENT WITH CHILD ELEMENTS
    // *
    if (childrenContent.length > 1) {
      return {
        tag: node.component,
        content: childrenContent,
        classes: node?.props?.className,
      };
    }

    // *
    // CURRENT ELEMENT ONLY HAS TEXT CONTENT AS CHILD
    // *
    return { ...childrenContent[0], classes: node?.props?.className };
  }
};

const gatherSectionContent = (node) => {
  // *
  // GRAB ALL SECTION CONTENT NODES
  // *
  const children = node?.children[0]?.children;

  // *
  // GRAB WHAT WE NEED FROM TREE OF NODES
  // *
  const sectionContent = [];
  for (const childNode of children) {
    const childContent = processChildNode(childNode);
    sectionContent.push(childContent);
  }

  // *
  // RETURN NEEDED MATERIALS
  // *
  return sectionContent;
};

export default gatherSectionContent;
