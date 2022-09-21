import React, { useEffect, useRef } from "react";
import { connect, styled } from "frontity";
import * as Mixins from "../styles/Mixins";
import * as Variables from "../styles/Variables";

import pcbLOGO from "../assets/pcb-logo.svg";
import Link from "@frontity/components/link";
import Navigation from "./components/Navigation";

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
        <CallBlock>{menus.menuData[0].acf.phone}</CallBlock>
        <AddressLink
          link="https://www.google.com/maps/place/Performance+Clear+Bra/@32.763217,-97.3587412,17z/data=!4m5!3m4!1s0x864e734cf2061099:0x8c5e06440f0da472!8m2!3d32.763217!4d-97.3565525"
          target="_blank"
        >
          <div>{menus.menuData[0].acf.address}</div>
        </AddressLink>
        <SocialsBlock>
          <object
            data={facebookLogo.guid.rendered}
            type="image/svg+xml"
          ></object>
          <object data={yelpLogo.guid.rendered} type="image/svg+xml"></object>
          <object
            data={youtubeLogo.guid.rendered}
            type="image/svg+xml"
          ></object>
          <object
            data={instagramLogo.guid.rendered}
            type="image/svg+xml"
          ></object>
        </SocialsBlock>
      </TopBarContainer>
      <MainBarContainer
        scrollPos={state.theme.header.scrollPos}
        topBarHeight={state.theme.header.topBarHeight}
      >
        <PcbLogoLink link="/">
          <PcbLogo src={pcbLOGO}></PcbLogo>
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
  @media (max-width: ${Variables.querySMMD}) {
    ${(props) =>
      props.scrollPos > 50 &&
      `
      height: calc(${props.headerHeight}px - ${props.topBarHeight}px);
    `}
  }
`;

const PcbLogoLink = styled(Link)`
  @media (max-width: ${Variables.queryMD}) {
    margin-right: auto;
    width: 200px;
  }
  @media (max-width: ${Variables.querySMMD}) {
    margin-left: 0.5rem;
  }
`;

const PcbLogo = styled.img`
  width: 250px;
  margin-left: 3rem;
  @media (max-width: ${Variables.queryMD}) {
    margin-right: auto;
    width: 200px;
  }
  @media (max-width: ${Variables.querySMMD}) {
    margin-left: 1rem;
  }
`;

const TopBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: ${Variables.headerBorder};
  transition: all 0.5s;
  ${Mixins.addColors(Variables.colorRedDeep2, Variables.colorWhitePure)};
  ${Mixins.addHeadingFont(400, 2)};
  @media (max-width: ${Variables.querySMMD}) {
    ${(props) => props.scrollPos > 50 && "transform: translateY(-100%)"}
  }
`;

const CallBlock = styled.div`
  padding: 0 3rem;
  border-right: ${Variables.headerBorder};
  @media (max-width: ${Variables.queryMD}) {
    padding: 0 1rem;
  }
  @media (max-width: ${Variables.querySMMD}) {
    border-right: none;
    margin-left: auto;
  }
  @media (max-width: ${Variables.querySM}) {
    margin: 0 auto;
  }
`;

const AddressLink = styled(Link)`
  ${Mixins.aCleanUp(Variables.colorWhite)};
  border-right: 1px solid ${Variables.colorWhite};
  padding: 0 3rem;
  text-decoration: underline;
  @media (max-width: ${Variables.queryMD}) {
    padding: 0 1rem;
  }
  @media (max-width: ${Variables.querySMMD}) {
    border-right: none;
    margin: 0 auto;
  }
  @media (max-width: ${Variables.queryXSM}) {
    margin: 0 auto;
    text-align: center;
  }
`;

const SocialsBlock = styled.div`
  height: 25px;
  display: flex;
  gap: 2rem;
  align-items: center;
  padding-left: 3rem;
  @media (max-width: ${Variables.queryMD}) {
    gap: 1rem;
    padding: 0 1rem;
    margin: 0 auto;
  }
  @media (max-width: ${Variables.querySMMD}) {
    padding-bottom: 0.5rem;
  }
`;

const MainBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s;
  background-color: ${(props) =>
    props.scrollPos > 125
      ? Variables.colorBlackPureRGBA
      : Variables.colorBlackPure};
  @media (max-width: ${Variables.queryMD}) {
    flex-direction: column;
  }
  @media (max-width: ${Variables.querySMMD}) {
    ${(props) =>
      props.scrollPos > 50 &&
      `
      border-top: 1px solid ${Variables.colorWhite};
      transform: translateY(-${props.topBarHeight}px);
    `}
  }
`;
