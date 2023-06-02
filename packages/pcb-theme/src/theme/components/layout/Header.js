import React, { useEffect, useRef } from "react";
import { connect, styled } from "frontity";
import * as Mixins from "../../styles/Mixins";
import * as Variables from "../../styles/Variables";

import pcbLOGO from "../../assets/pcb-logo.svg";
import Link from "@frontity/components/link";
import Navigation from "./Navigation";

function Header({ state }) {
  // Fetch Menus
  const menus = state.source.get("menus");

  // Fetch Assets
  const { data: assetData } = state.source.get("media");
  const assets = Object.values(assetData);
  // const pcbLogo = assets.find((asset) => asset.slug === "pcb-logo");
  const facebookLogo = assets.find((asset) => asset.slug === "facebook-header");
  const yelpLogo = assets.find((asset) => asset.slug === "yelp-header");
  const youtubeLogo = assets.find((asset) => asset.slug === "youtube-header");
  const instagramLogo = assets.find(
    (asset) => asset.slug === "instagram-header"
  );

  // Top Bar Reference
  const topBarContainer = useRef();
  const headerRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      state.theme.header.scrollPos = window.scrollY;
    });
    state.theme.header.topBarHeight = topBarContainer.current.offsetHeight;
    state.theme.header.headerHeight = headerRef.current.offsetHeight;
  }, []);

  return (
    <StyledHeader
      ref={headerRef}
      scrollPos={state.theme.header.scrollPos}
      topBarHeight={state.theme.header.topBarHeight}
      headerHeight={state.theme.header.headerHeight}
    >
      <TopBarContainer
        scrollPos={state.theme.header.scrollPos}
        ref={topBarContainer}
      >
        <CallBlock>
          <PhoneLink link="tel:(972)%20295-7068">
            {menus.menuData[0].acf.phone}
          </PhoneLink>
        </CallBlock>
        <AddressLink
          link="https://www.google.com/maps/place/Performance+Clear+Bra/@32.763217,-97.3587412,17z/data=!4m5!3m4!1s0x864e734cf2061099:0x8c5e06440f0da472!8m2!3d32.763217!4d-97.3565525"
          target="_blank"
        >
          <div>{menus.menuData[0].acf.address}</div>
        </AddressLink>
        <SocialsBlock>
          <object
            data={facebookLogo?.guid?.rendered}
            type="image/svg+xml"
          ></object>
          <object data={yelpLogo?.guid?.rendered} type="image/svg+xml"></object>
          <object
            data={youtubeLogo?.guid?.rendered}
            type="image/svg+xml"
          ></object>
          <object
            data={instagramLogo?.guid?.rendered}
            type="image/svg+xml"
          ></object>
        </SocialsBlock>
      </TopBarContainer>
      <MainBarContainer
        scrollPos={state.theme.header.scrollPos}
        topBarHeight={state.theme.header.topBarHeight}
      >
        <PcbLogoLink link="/">
          <PcbLogo src={pcbLOGO} alt="Performance Clear Bra Logo"></PcbLogo>
        </PcbLogoLink>
        <Navigation type="header" menuNumber={state.theme.headerMenuID} />
      </MainBarContainer>
    </StyledHeader>
  );
}

export default connect(Header);

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  @media (max-width: ${Variables.query550}) {
    ${(props) =>
      props.scrollPos > 50 &&
      `
      height: calc(${props.headerHeight}px - ${props.topBarHeight}px);
    `}
  }
`;

const PcbLogoLink = styled(Link)`
  @media (max-width: ${Variables.query800}) {
    margin-right: auto;
    width: 200px;
  }
  @media (max-width: ${Variables.query550}) {
    margin-left: 0.5rem;
  }
`;

const PcbLogo = styled.img`
  width: 250px;
  margin-left: 3rem;
  @media (max-width: ${Variables.query800}) {
    margin-right: auto;
    width: 200px;
  }
  @media (max-width: ${Variables.query550}) {
    margin-left: 1rem;
  }
`;

const TopBarContainer = styled.div`
  height: 33px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: ${Variables.headerBorder};
  transition: all 0.5s;
  ${Mixins.addColors(Variables.colorRedDeep2, Variables.colorWhitePure)};
  ${Mixins.addHeadingFont(400, 2)};
  @media (max-width: ${Variables.query550}) {
    ${(props) => props.scrollPos > 50 && "transform: translateY(-100%)"}
  }
  @media (max-width: 566px) {
    height: 45px;
  }
  @media (max-width: 415px) {
    height: 73px;
  }
  @media (max-width: 286px) {
    height: 96px;
  }
`;

const CallBlock = styled.div`
  padding: 0 3rem;
  border-right: ${Variables.headerBorder};
  @media (max-width: ${Variables.query800}) {
    padding: 0 1rem;
  }
  @media (max-width: ${Variables.query550}) {
    border-right: none;
    margin-left: auto;
  }
  @media (max-width: ${Variables.query490}) {
    margin: 0 auto;
  }
`;

const PhoneLink = styled(Link)`
  color: ${Variables.colorWhite};
`;

const AddressLink = styled(Link)`
  ${Mixins.aCleanUp(Variables.colorWhite)};
  border-right: 1px solid ${Variables.colorWhite};
  padding: 0 3rem;
  text-decoration: underline;
  @media (max-width: ${Variables.query800}) {
    padding: 0 1rem;
  }
  @media (max-width: ${Variables.query550}) {
    border-right: none;
    margin: 0 auto;
  }
  @media (max-width: ${Variables.query392}) {
    margin: 0 auto;
    text-align: center;
  }
`;

const SocialsBlock = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  padding-left: 3rem;
  @media (max-width: ${Variables.query800}) {
    gap: 1rem;
    padding: 0 1rem;
    margin: 0 auto;
  }
  @media (max-width: ${Variables.query550}) {
    padding-bottom: 0.5rem;
  }
`;

const MainBarContainer = styled.div`
  height: 93px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s;
  background-color: ${(props) =>
    props.scrollPos > 125
      ? Variables.colorBlackPureRGBA
      : Variables.colorBlackPure};
  @media (max-width: ${Variables.query800}) {
    flex-direction: column;
    height: 95px;
  }
  @media (max-width: ${Variables.query550}) {
    ${(props) =>
      props.scrollPos > 50 &&
      `
      border-top: 1px solid ${Variables.colorWhite};
      transform: translateY(-${props.topBarHeight}px);
    `}
  }
`;
