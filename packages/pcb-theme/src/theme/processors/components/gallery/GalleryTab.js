import React from "react";
import { connect, css, styled } from "frontity";
import Link from "@frontity/components/link";
import Gallery from "./Gallery";

import * as Mixins from "../../../styles/Mixins";
import * as Variables from "../../../styles/Variables";
import LinkStyles from "../../../styles/componentStyles/LinkStyles";

const GalleryTab = ({
  sectionHeader,
  asideContent,
  galleryContent,
  buttons,
  hasAside,
  hasPPFID,
}) => {
  return (
    <Section id={hasPPFID && hasPPFID}>
      {!hasAside && (
        <>
          <Header>{sectionHeader}</Header>
          <Gallery galleryContent={galleryContent} />
        </>
      )}
      {hasAside && (
        <GalleryWrapper hasNoButtons={buttons ? false : true}>
          <GalleryContent>
            <Gallery galleryContent={galleryContent} />
          </GalleryContent>
          <GalleryAside>
            <Header>{asideContent.heading}</Header>
            <Description>{asideContent.description}</Description>
          </GalleryAside>
        </GalleryWrapper>
      )}
      {buttons && (
        <CTAButtons>
          {buttons.map((button, buttonIndex) => {
            const isSecondary = button.content.includes("See Our Work");
            return (
              <CTAButton
                key={`gallery-CTA-${buttonIndex + 1}`}
                link={button.link}
                type={isSecondary ? "secondary" : "primary"}
              >
                {button.content}
              </CTAButton>
            );
          })}
        </CTAButtons>
      )}
    </Section>
  );
};

export default connect(GalleryTab);

const Section = styled.section`
  ${Mixins.addColors(Variables.colorBlack, Variables.colorWhite)};
`;

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding-top: 4rem;
  gap: 2rem;
  ${(props) =>
    props.hasNoButtons &&
    css`
      padding-bottom: 4rem;
    `}
  @media (max-width: ${Variables.query800}) {
    display: flex;
    flex-direction: column;
  }
`;

const GalleryContent = styled.div``;

const GalleryAside = styled.aside``;

const Header = styled.h3`
  text-align: center;
  padding: 1.5rem 0;
  ${Mixins.addHeadingFont(700, 3.5)};
  text-shadow: ${Variables.textShadow};
  &:after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 8rem;
    padding-top: 5px;
    border-bottom: 5px ${Variables.colorRedBright1} solid;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const CTAButton = styled(Link)`
  ${(props) => LinkStyles(props.type, props.fontSize)};
  ${(props) =>
    props.type === "secondary" &&
    css`
      background-color: ${Variables.colorBlack};
    `}
  border: none;
  margin: 0;
`;
