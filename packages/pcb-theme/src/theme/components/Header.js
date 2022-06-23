import React from "react";
import { connect, styled, css } from "frontity";
import * as Mixins from "../styles/Mixins";
import * as Variables from "../styles/Variables";

import Link from "@frontity/components/link";
import pcbLOGO from "../assets/pcb-logo-transparent.svg";

function Header({ route, state, actions, libraries }) {
  // Fetch Menus
  const menus = state.source.get("menus");
  console.log(menus);

  // Fetch Assets
  const { data: assetData } = state.source.get("media");
  const assets = Object.values(assetData);
  const pcbLogo = assets.find((asset) => asset.id === 87);
  const facebookLogo = assets.find((asset) => asset.id === 82);
  const yelpLogo = assets.find((asset) => asset.id === 83);
  console.log(assets);

  return (
    <header>
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
        <Nav>
          <NavList>
            {menus.navLinks
              .filter((link) => link.menus === 3)
              .map((link) => {
                if (link.id === 61) {
                  const childItems = menus.navLinks.filter(
                    (link) => link.parent === 61
                  );
                  return (
                    <ParentLink key={link.id} id={link.id}>
                      {link.title.rendered}
                      {/* Font-Awesome drop-down icon here */}
                      <ChildList>
                        {childItems.map((item) => {
                          return (
                            <ChildLink key={item.id} id={item.id}>
                              <StyledLink link={item.url}>
                                {item.title.rendered}
                              </StyledLink>
                            </ChildLink>
                          );
                        })}
                      </ChildList>
                    </ParentLink>
                  );
                }
                if (link.acf.cta === "yes") {
                  return (
                    <CTA key={link.id} id={link.id}>
                      <StyledCTA link={link.url}>
                        {link.title.rendered}
                      </StyledCTA>
                    </CTA>
                  );
                }
                if (link.parent === 0) {
                  return (
                    <NormalLink key={link.id} id={link.id}>
                      <StyledLink link={link.url}>
                        {link.title.rendered}
                      </StyledLink>
                    </NormalLink>
                  );
                }
              })}
          </NavList>
        </Nav>
      </MainBarContainer>
    </header>
  );
}

export default connect(Header);

const PcbLogo = styled.object`
  width: 250px;
  margin-left: 3rem;
`;

const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: ${Variables.headerBorder};
  ${Mixins.addColors(Variables.colorRedDeep2, Variables.colorWhite)};
  ${Mixins.addHeadingFont(400, 2)};
`;

const CallBlock = styled.div`
  padding-right: 10rem;
  border-right: ${Variables.headerBorder};
`;

const AddressBlock = styled.div`
  padding-right: 25rem;
`;

const SocialsBlock = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const MainBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Variables.colorBlack};
  ${Mixins.addHeadingFont(300, 2)}
`;

const Nav = styled.nav`
  color: ${Variables.colorWhite};
  margin-right: 7rem;
  margin-top: 2rem;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 8rem;
`;

const NormalLink = styled.li`
  ${Mixins.liCleanUp};
  ${Mixins.addHeadingFont(700, 3)};
`;

const ParentLink = styled.li`
  ${Mixins.liCleanUp};
  ${Mixins.addHeadingFont(700, 3)};
  text-align: center;
  position: relative;
  padding-bottom: 2rem;
  &:hover {
    color: ${Variables.colorGold};
  }
`;

const ChildList = styled.ul`
  display: none;
  position: absolute;
  min-width: 20rem;
  z-index: 1;
  margin-left: -6rem;
  margin-top: 1.5rem;
  box-shadow: 0 0.5rem 1rem rgba(16, 16, 16, 0.3);
  background-color: ${Variables.colorGray1};
  border-radius: 0.5rem;
  ${ParentLink}:hover & {
    display: block;
  }
  &::before {
    content: "";
    display: block;
    border-color: transparent transparent ${Variables.colorGray1} transparent;
    border-style: solid;
    border-width: 1.5rem;
    position: absolute;
    top: -3rem;
    left: 50%;
    margin-left: -2rem;
  }
`;

const ChildLink = styled.li`
  ${Mixins.liCleanUp};
  ${Mixins.addHeadingFont(700, 2.5)};
  text-align: center;
  &:first-child {
    padding-top: 0.5rem;
  }
  &:last-child {
    padding-bottom: 1rem;
  }
`;

const CTA = styled.li`
  ${Mixins.liCleanUp};
  ${Mixins.addHeadingFont(700, 3)};
`;

const StyledLink = styled(Link)`
  ${Mixins.aCleanUp(Variables.colorWhite)};
  &:hover {
    color: ${Variables.colorGold};
  }
`;

const StyledCTA = styled(Link)`
  ${Mixins.aCleanUp(Variables.colorGold)};
  border: 2px solid ${Variables.colorGold};
  border-radius: 0.5rem;
  padding: 0.75rem;
  &:hover {
    color: ${Variables.colorWhite};
    border-color: ${Variables.colorRed};
  }
`;
