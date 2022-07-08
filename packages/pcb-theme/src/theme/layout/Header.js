import React from "react";
import { connect, styled } from "frontity";
import * as Mixins from '../styles/Mixins';
import * as Variables from "../styles/Variables";

import pcbLOGO from "../assets/pcb-logo-transparent.svg";
import Navigation from "./components/Navigation";

// import facebookLogo from '../assets/facebook-header.svg';
// import yelpLogo from '../assets/yelp-header.svg';

function Header({ state }) {
  // Fetch Menus
  const menus = state.source.get("menus");

  // Fetch Assets
  const { data: assetData } = state.source.get("media");
  const assets = Object.values(assetData);
  // const pcbLogo = assets.find((asset) => asset.id === ??); // for when logo comes from WP
  const facebookLogo = assets.find((asset) => asset.slug === 'facebook-header');
  const yelpLogo = assets.find((asset) => asset.slug === 'yelp-header');

  return (
    <StyledHeader>
      <TopBarContainer>
        <CallBlock>{menus.menuData[0].acf.phone}</CallBlock>
        <AddressBlock>{menus.menuData[0].acf.address}</AddressBlock>
        <SocialsBlock>
          <object
            data={facebookLogo.guid.rendered}
            type="image/svg+xml"
          ></object>
          <object data={yelpLogo.guid.rendered} type="image/svg+xml"></object>
        </SocialsBlock>
      </TopBarContainer>
      <MainBarContainer>
        {/* <PcbLogo data={pcbLogo.guid.rendered} type="image/svg+xml"></PcbLogo> */}
        <PcbLogo data={pcbLOGO} type="image/svg+xml"></PcbLogo>
        <Navigation type='header' menuNumber={state.theme.headerMenuID} />
      </MainBarContainer>
    </StyledHeader>
  );
}

export default connect(Header);

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
`;

const PcbLogo = styled.object`
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
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: ${Variables.headerBorder};
  ${Mixins.addColors(Variables.colorRedDeep2, Variables.colorWhite)};
  ${Mixins.addHeadingFont(400, 2)};
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

const AddressBlock = styled.div`
  margin-right: auto;
  padding-left: 3rem;
  @media (max-width: ${Variables.queryMD}) {
    padding: 0 1rem;
  }
  @media (min-width: ${Variables.querySMMD}) and (max-width: 36.25em) {
    border-right: 1px solid ${Variables.colorWhite};
  }
  @media (max-width: ${Variables.querySMMD}) {
    margin-left: auto;
    margin-right: 0;
  }
  @media (max-width: ${Variables.queryXSM}) {
    margin-right: auto;
    text-align: center;
  }
`;

const SocialsBlock = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  padding-right: 3rem;
  @media (max-width: ${Variables.queryMD}) {
    gap: 1rem;
    padding: 0 1rem;
  }
  @media (max-width: ${Variables.querySMMD}) {
    margin: 0 auto;
    padding-bottom: 0.5rem;
  }
`;

const MainBarContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Variables.colorBlack};
  @media (max-width: ${Variables.queryMD}) {
    flex-direction: column;
  }
`;