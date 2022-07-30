import React from "react";
import { styled } from "frontity";
import Link from "@frontity/components/link";
import Card from "../layout/components/Card";

import * as Mixins from "../styles/Mixins";
import * as Variables from "../styles/Variables";
import LinkStyles from "../styles/componentStyles/LinkStyles";

const HomeServices = ({
  sectionHeader,
  cards,
  buttonContent,
  buttonFontSize,
  buttonLink,
}) => {
  return (
    <Section>
      <Heading>{sectionHeader}</Heading>
      <Cards>
        {cards.map((card, i) => {
          const shortHand = card.children[0].children;
          const title = shortHand[0]?.children[0]?.content;
          const img = shortHand[1]?.children[0]?.props;
          const description = shortHand[2]?.children[0]?.content;
          const buttonContent =
            shortHand[3]?.children[0]?.children[0]?.children[0]?.content;
          const buttonLink =
            shortHand[3]?.children[0]?.children[0]?.props?.href;
          return (
            <Card
              key={i + 1}
              type="services"
              title={title}
              img={img}
              description={description}
              buttonContent={buttonContent}
              buttonLink={buttonLink}
            />
          );
        })}
      </Cards>
      <Button type="primary" fontSize={buttonFontSize} link={`/${buttonLink}`}>
        {buttonContent}
      </Button>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
`;

const Heading = styled.h3`
  text-align: center;
  margin-top: 1.5rem;
  ${Mixins.addHeadingFont(700, 3.5)};
  text-shadow: ${Variables.textShadow};
`;

const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
`;

const Button = styled(Link)`
  ${(props) => LinkStyles(props.type, props.fontSize)};
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const homeServicesProcessor = {
  name: "Home Services",
  priority: 5,
  test: ({ node }) => {
    return (
      node?.props?.className?.includes("wp-block-group") &&
      node?.children[0]?.children[1]?.props?.className?.includes(
        "wp-block-group"
      )
    );
  },
  processor: ({ node }) => {
    // for console, and to shorten digging
    const loggedNode = node?.children[0]?.children;

    // section header, always will be first
    const sectionHeader = loggedNode[0]?.children[0]?.content;

    // Cards - slices first and last element to leave only amount of cards.  Will loop through in the React component.
    const cards = loggedNode?.slice(1, -1);

    // button, always will be last
    const buttonContent =
      loggedNode?.at(-1)?.children[0]?.children[0]?.children[0].content;
    const buttonFontSize = loggedNode?.at(-1)?.children[0]?.props?.css?.styles;
    const buttonLink = loggedNode
      ?.at(-1)
      ?.children[0].children[0]?.props?.href.split("/")
      .reverse()[1];

    return {
      component: HomeServices,
      props: {
        loggedNode,
        sectionHeader,
        cards,
        buttonContent,
        buttonFontSize,
        buttonLink,
      },
    };
  },
};

export default homeServicesProcessor;
