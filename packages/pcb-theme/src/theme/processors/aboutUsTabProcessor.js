import React from "react";
import { styled, css } from "frontity";
import Link from "@frontity/components/link";

import LinkStyles from "../styles/componentStyles/LinkStyles";
import * as Variables from "../styles/Variables";
import * as Mixins from "../styles/Mixins";
import LongCard from "../layout/components/LongCard";

const AboutUsTab = ({
  sectionHeader,
  video,
  aboutUsCards,
  buttonContent,
  buttonFontSize,
  buttonLink,
}) => {
  return (
    <Section>
      <SectionHeader>{sectionHeader}</SectionHeader>
      <VideoWrapper>
        <iframe
          src={video.src}
          loading="lazy"
          title={video.title}
          frameBorder="0"
          allowFullScreen={video.allowFullScreen}
          allow={video.allow}
          width='100%'
          height='100%'
        />
      </VideoWrapper>
      <AboutUsCards>
        {aboutUsCards.map((aboutUsCard, i) => {
          const aboutUsContent = aboutUsCard?.children[0].children;
          const firstElement = aboutUsContent[0].component;
          const item1 =
            firstElement === "figure"
              ? aboutUsContent[0].children[0].props
              : aboutUsContent[0].children[0].content;
          const item2 = aboutUsContent[1].children[0].content;
          const item3 =
            firstElement === "figure"
              ? aboutUsContent[2].children[0].content
              : aboutUsContent[2].children[0].props;
          return (
            <LongCard
              key={`about-us-card-${i + 1}`}
              alignment={firstElement === "figure" ? "text-right" : "text-left"}
              item1={item1}
              item2={item2}
              item3={item3}
            />
          );
        })}
      </AboutUsCards>
      <Button type="primary" fontSize={buttonFontSize} link={`/${buttonLink}`}>
        {buttonContent}
      </Button>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionHeader = styled.h3`
  text-align: center;
  margin-top: 1.5rem;
  ${Mixins.addHeadingFont(700, 3.5)};
  text-shadow: ${Variables.textShadow};
`;

const VideoWrapper = styled.figure`
  width: 70vw;
  height: 39.4vw;
  margin: 3rem auto;
  box-shadow: ${Variables.boxShadow};
`;

const AboutUsCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Button = styled(Link)`
  ${(props) => LinkStyles(props.type, props.fontSize)};
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const aboutUsTabProcessor = {
  name: "About Us Tab",
  priority: 5,
  test: ({ node }) => {
    return (
      node?.props?.className?.includes("wp-block-group") &&
      node?.children[0]?.children[1]?.props?.className?.includes(
        "is-type-video"
      )
    );
  },
  processor: ({ node }) => {
    // for console, and to shorten digging
    const loggedNode = node?.children[0]?.children;

    // section header, always will be first
    const sectionHeader = loggedNode[0]?.children[0]?.content;

    // video
    const video = loggedNode[1]?.children[0]?.children[0]?.props;

    // About Us Cards - slices first 2 and last element to leave amount of About Us Cards
    const aboutUsCards = loggedNode?.slice(2, -1);

    // button, always will be last
    const buttonContent =
      loggedNode?.at(-1)?.children[0]?.children[0]?.children[0].content;
    const buttonFontSize = loggedNode?.at(-1)?.children[0]?.props?.css?.styles;
    const buttonLink = loggedNode
      ?.at(-1)
      ?.children[0].children[0]?.props?.href.split("/")
      .reverse()[1];

    return {
      component: AboutUsTab,
      props: {
        sectionHeader,
        video,
        aboutUsCards,
        buttonContent,
        buttonFontSize,
        buttonLink,
      },
    };
  },
};

export default aboutUsTabProcessor;
