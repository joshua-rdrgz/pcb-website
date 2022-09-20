import React, { useEffect } from "react";
import { styled, css, connect } from "frontity";
import Link from "@frontity/components/link";
import RepBrands from "./RepBrands";

import LinkStyles from "../../../styles/componentStyles/LinkStyles";
import * as Variables from "../../../styles/Variables";
import * as Mixins from "../../../styles/Mixins";

const Herobox = ({
  state,
  actions,
  primaryHeadingContent,
  slot2Tag,
  slot2Content,
  slot3Tag,
  slot3Content,
  buttonFontSize,
  buttonLink,
}) => {
  const link = state.source.get(state.router.link);
  const media = state.source.get("media");
  const mediaID = state.source.page[link.id].featured_media;
  const [fMedia] = media.data.filter((media) => media.id === mediaID);
  const fImg = fMedia?.guid.rendered;
  const frontityButtonLink = buttonLink.includes("#")
    ? buttonLink
    : buttonLink.split("/").reverse()[1];

  useEffect(() => {
    let page;
    switch (state.router.link) {
      case "/":
        page = "home";
        break;
      case "/about/":
        page = "about";
        break;
      case "/paint-protection-film/":
        page = "ppf";
        break;
      case "/window-tint/":
        page = "wt";
        break;
    }
    actions.theme.herobox.setActiveRepBrands(page);
  }, [state.router.link]);

  return (
    <Section image={fImg}>
      <HeroboxContent>
        <PrimaryHeading>{primaryHeadingContent}</PrimaryHeading>
        {slot2Tag.includes("h") ? (
          <SecondaryHeading>{slot2Content}</SecondaryHeading>
        ) : frontityButtonLink.includes("#") ? (
          <StyledA
            href={frontityButtonLink}
            type="primary"
            fontSize={buttonFontSize}
          >
            {slot3Content}
          </StyledA>
        ) : (
          <StyledButton
            link={`/${frontityButtonLink}`}
            type="primary"
            fontSize={buttonFontSize}
          >
            {slot2Content}
          </StyledButton>
        )}
        {slot3Tag && frontityButtonLink.includes("#") ? (
          <StyledA
            href={frontityButtonLink}
            type="primary"
            fontSize={buttonFontSize}
          >
            {slot3Content}
          </StyledA>
        ) : (
          <StyledButton
            link={`/${frontityButtonLink}`}
            type="primary"
            fontSize={buttonFontSize}
          >
            {slot3Content}
          </StyledButton>
        )}
      </HeroboxContent>
      <RepBrandsContainer>
        <RepBrands page={state.theme.herobox.activeRepBrands} />
      </RepBrandsContainer>
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
  @media (max-width: ${Variables.queryLG}) {
    background: repeating-linear-gradient(
      135deg,
      ${Variables.colorBlackPure},
      ${Variables.colorBlackPure} 10px,
      rgba(0, 0, 0, 0.99) 10px,
      rgba(0, 0, 0, 0.99) 20px
    );
    height: auto;
  }
  @media (max-width: ${Variables.queryMDSMSM}) {
    text-align: center;
  }
`;

const HeroboxContent = styled.div`
  color: ${Variables.colorWhite};
  margin: auto 0;
  margin-right: auto;
  margin-left: 12rem;
  @media (max-width: ${Variables.queryLG}) {
    margin-left: auto;
  }
`;

// exported for LinkStyles.js
export const addHeadingMediaQueries = (fontSize) => css`
  @media (max-width: ${Variables.queryMDMD}) {
    font-size: ${fontSize - 1.5}rem;
  }
  @media (max-width: ${Variables.querySMMD}) {
    font-size: ${fontSize - 2}rem;
  }
`;

const PrimaryHeading = styled.h1`
  ${Mixins.addHeadingFont(700, 8)};
  ${addHeadingMediaQueries(8)};
  margin-top: 4rem;
  @media (max-width: ${Variables.queryMDMD}) {
    font-size: 5.5rem;
  }
  @media (max-width: ${Variables.querySMMD}) {
    font-size: 4.5rem;
  }
  @media (max-width: ${Variables.querySM}) {
    font-size: 3.5rem;
    padding: 0 1.5rem;
  }
`;

const SecondaryHeading = styled.h2`
  ${Mixins.addHeadingFont(400, 4)};
  ${addHeadingMediaQueries(4)};
  @media (max-width: ${Variables.querySM}) {
    padding: 0 1rem;
  }
`;

const StyledA = styled.a`
  ${(props) => LinkStyles(props.type, props.fontSize)};
  @media (max-width: ${Variables.queryMDMD}) {
    font-size: ${(props) => props.fontSize - 1.5}rem;
  }
  @media (max-width: ${Variables.querySMMD}) {
    font-size: ${(props) => props.fontSize - 2}rem;
  }
`;

const StyledButton = styled(Link)`
  ${(props) => LinkStyles(props.type, props.fontSize)};
  @media (max-width: ${Variables.queryMDMD}) {
    font-size: ${(props) => props.fontSize - 1.5}rem;
  }
  @media (max-width: ${Variables.querySMMD}) {
    font-size: ${(props) => props.fontSize - 2}rem;
  }
`;

const RepBrandsContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 3rem;
  align-items: center;
  flex-wrap: wrap;
  padding: 3rem 2rem;
  background-color: ${Variables.colorGray1RGBA};
  @media (max-width: ${Variables.queryXLG}) {
    padding: 2.5rem 2rem;
  }
  @media (max-width: ${Variables.querySM}) {
    gap: 1rem;
  }
`;