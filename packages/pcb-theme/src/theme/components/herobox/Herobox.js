import React, { useEffect } from "react";
import { styled, css, connect } from "frontity";
import Link from "@frontity/components/link";
import RepBrands from "./RepBrands";

import LinkStyles from "../../styles/componentStyles/LinkStyles";
import * as Variables from "../../styles/Variables";
import * as Mixins from "../../styles/Mixins";

const onClickHandler = (e) => {
  e.preventDefault();
  const customizer = document.getElementById("customizer-anchor");
  customizer &&
    customizer.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
};

const Herobox = ({ state, content }) => {
  const link = state.source.get(state.router.link);
  const media = state.source.get("media");
  const mediaID = state.source.page[link.id].featured_media;
  const [fMedia] = media.data.filter((media) => media.id === mediaID);
  const backgroundImage = fMedia?.guid.rendered;

  const [primaryHeading, secondaryHeading, buttons] = content;

  return (
    <Section image={backgroundImage}>
      <HeroboxContent>
        <SecondaryHeading>{secondaryHeading.content}</SecondaryHeading>
        <PrimaryHeading>{primaryHeading.content}</PrimaryHeading>
        <StyledDivContainer>
          <StyledDivWrapper>
            {Array.isArray(buttons.content) &&
              buttons.content.map((button, buttonIdx) => {
                const firstButton = buttonIdx === 0;
                const linkIsAnchor = button.href.includes("#");
                const componentProps = {
                  key: `herobox-button-${buttonIdx}`,
                  as: linkIsAnchor ? "button" : Link,
                  link: button.href,
                  type: firstButton ? "secondary-herobox" : "primary",
                  onClick: linkIsAnchor && onClickHandler,
                };
                return (
                  <StyledLink {...componentProps}>{button.content}</StyledLink>
                );
              })}
          </StyledDivWrapper>
        </StyledDivContainer>
      </HeroboxContent>
      <RepBrands />
    </Section>
  );
};

export default connect(Herobox);

const Section = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.image});
  background-color: ${Variables.colorBlackPureRGBA};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: min-content;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${Variables.query1000}) {
    background: repeating-linear-gradient(
      135deg,
      ${Variables.colorBlackPure},
      ${Variables.colorBlackPure} 10px,
      rgba(0, 0, 0, 0.9) 10px,
      rgba(0, 0, 0, 0.9) 20px
    );
    height: auto;
  }
  @media (max-width: ${Variables.query600}) {
    text-align: center;
  }
`;

const HeroboxContent = styled.div`
  color: ${Variables.colorWhite};
  margin: 7.5rem 0;
  margin-right: auto;
  padding-right: 10rem;
  margin-left: 12rem;
  @media (max-width: ${Variables.query1000}) {
    text-align: center;
    margin: 0;
    padding: 0 10rem;
  }
  @media (max-width: ${Variables.query600}) {
    padding: 0 5rem;
  }
  @media (max-width: ${Variables.query400}) {
    padding: 0 2rem;
  }
  @media (max-width: ${Variables.query420}) {
    padding: 0;
  }
`;

const addHeadingMediaQueries = (fontSize) => css`
  @media (max-width: ${Variables.query750}) {
    font-size: ${fontSize - 1.5}rem;
  }
  @media (max-width: ${Variables.query550}) {
    font-size: ${fontSize - 2}rem;
  }
`;

const SecondaryHeading = styled.div`
  margin-top: 4rem;
  ${Mixins.addHeadingFont(400, 2.5)};
  ${addHeadingMediaQueries(4)};
  @media (max-width: ${Variables.query490}) {
    padding: 0 1rem;
  }
`;

const PrimaryHeading = styled.h1`
  ${Mixins.addHeadingFont(700, 8)};
  ${addHeadingMediaQueries(8)};
  line-height: 10rem;
  @media (max-width: ${Variables.query750}) {
    font-size: 5.5rem;
    line-height: 8rem;
  }
  @media (max-width: ${Variables.query550}) {
    font-size: 4.5rem;
    line-height: 6rem;
  }
  @media (max-width: ${Variables.query490}) {
    font-size: 3.5rem;
    padding: 0 1.5rem;
  }
`;

const StyledDivContainer = styled.div`
  display: flex;
`;

const StyledDivWrapper = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: ${Variables.query1000}) {
    margin: 0 auto;
  }
  @media (max-width: ${Variables.query490}) {
    flex-direction: column;
    gap: 0;
  }
`;

// *
// WILL BE PROGRAMMATICALLY REPLACED WITH:
// button OR Link
// *
const StyledLink = styled.div`
  border: none;
  ${(props) => LinkStyles(props.type, props.fontSize)};
  @media (max-width: ${Variables.query750}) {
    font-size: ${(props) => props.fontSize - 1.5}rem;
  }
  @media (max-width: ${Variables.query550}) {
    font-size: ${(props) => props.fontSize - 2}rem;
  }
`;
