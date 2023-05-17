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
  console.log(buttons);

  return (
    <Section image={backgroundImage}>
      <HeroboxContent>
        <PrimaryHeading>{primaryHeading.content}</PrimaryHeading>
        <SecondaryHeading>{secondaryHeading.content}</SecondaryHeading>
        <StyledDiv>
          {Array.isArray(buttons.content) &&
            buttons.content.map((button, buttonIdx) => {
              const firstButton = buttonIdx === 0;
              const linkIsAnchor = button.href.includes("#");
              const componentProps = {
                key: `herobox-button-${buttonIdx}`,
                link: button.href,
                type: firstButton ? "secondary-herobox" : "primary",
                onClick: linkIsAnchor && onClickHandler,
              };

              return (
                <StyledLink {...componentProps}>{button.content}</StyledLink>
              );
            })}
        </StyledDiv>
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
  height: 80vh;
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
  margin: auto 0;
  margin-right: auto;
  margin-left: 12rem;
  @media (max-width: ${Variables.query1000}) {
    margin-left: auto;
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

const PrimaryHeading = styled.h1`
  ${Mixins.addHeadingFont(700, 8)};
  ${addHeadingMediaQueries(8)};
  margin-top: 4rem;
  @media (max-width: ${Variables.query750}) {
    font-size: 5.5rem;
  }
  @media (max-width: ${Variables.query550}) {
    font-size: 4.5rem;
  }
  @media (max-width: ${Variables.query490}) {
    font-size: 3.5rem;
    padding: 0 1.5rem;
  }
`;

const SecondaryHeading = styled.h2`
  ${Mixins.addHeadingFont(400, 4)};
  ${addHeadingMediaQueries(4)};
  @media (max-width: ${Variables.query490}) {
    padding: 0 1rem;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: ${Variables.query490}) {
    flex-direction: column;
    gap: 0;
  }
`;

const StyledLink = styled(Link)`
  ${(props) => LinkStyles(props.type, props.fontSize)};
  @media (max-width: ${Variables.query750}) {
    font-size: ${(props) => props.fontSize - 1.5}rem;
  }
  @media (max-width: ${Variables.query550}) {
    font-size: ${(props) => props.fontSize - 2}rem;
  }
`;
