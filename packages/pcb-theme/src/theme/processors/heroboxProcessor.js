import React from "react";
import { styled, css } from "frontity";
import Link from "@frontity/components/link";

import bestOfFtWorth from '../assets/best-of-ft-worth.svg';
import ceramicPro from "../assets/ceramic-pro.svg";
import suntek from "../assets/suntek.svg";
import LinkStyles from "../styles/componentStyles/LinkStyles";
import * as Variables from "../styles/Variables";
import * as Mixins from "../styles/Mixins";

const Herobox = ({
  primaryHeadingContent,
  slot2Tag,
  slot2Content,
  slot3Tag,
  slot3Content,
  buttonFontSize,
  buttonLink,
  state,
}) => {
  const link = state.source.get(state.router.link);
  const media = state.source.get("media");
  const mediaID = state.source.page[link.id].featured_media;
  const [fMedia] = media.data.filter((media) => media.id === mediaID);
  const fImg = fMedia?.guid.rendered;
  const frontityButtonLink = buttonLink.includes("#")
    ? buttonLink
    : buttonLink.split("/").reverse()[1];

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
      <RepBrands>
        <Brand2 data={suntek} type="image/svg+xml"></Brand2>
        <Link link="https://preferredmechanic.com/report/window-tinting-places/near_fort-worth-tarrant-county,tx/" target="_blank">
          <img src={bestOfFtWorth} alt="Automotive Tinting Companies" />
        </Link>
        <Brand3 data={ceramicPro} type="image/svg+xml"></Brand3>
      </RepBrands>
    </Section>
  );
};

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
    height: 65vh;
  }
  @media (max-width: ${Variables.queryMDSMSM}) {
    text-align: center;
  }
  @media (max-width: ${Variables.querySM}) {
    height: 50%;
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
  }
`;

const SecondaryHeading = styled.h2`
  ${Mixins.addHeadingFont(400, 4)};
  ${addHeadingMediaQueries(4)};
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

const RepBrands = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 3rem 0;
  background-color: ${Variables.colorGray1RGBA};
  @media (max-width: ${Variables.queryXLG}) {
    gap: 15rem;
    padding: 2.5rem 0;
  }
  @media (max-width: ${Variables.queryLG}) {
    gap: 5rem;
  }
  @media (max-width: ${Variables.querySM}) {
    gap: 1rem;
  }
`;

const Brand1 = styled.object`
  @media (max-width: ${Variables.queryXLG}) {
    max-width: 75px;
  }
`;
const Brand2 = styled.object`
  @media (max-width: ${Variables.queryXLG}) {
    max-width: 155px;
  }
`;
const Brand3 = styled.object`
  @media (max-width: ${Variables.queryXLG}) {
    max-width: 250px;
  }
`;

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
