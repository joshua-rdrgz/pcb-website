import React from "react";
import { connect, styled } from "frontity";
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
        <MobileToggle type="checkbox" id="mobile-toggle" />
        <MobileBurger for="mobile-toggle">
          <MobileIcon>&nbsp;</MobileIcon>
        </MobileBurger>
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
                      <span>{link.title.rendered}</span>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Variables.colorBlack};
  @media (max-width: ${Variables.queryMD}) {
    flex-direction: column;
  }
`;

export const Nav = styled.nav`
  // exported for Mixins.js
  color: ${Variables.colorWhite};
  margin-left: auto;
  margin-right: 3rem;
  margin-top: 2rem;
  @media (max-width: ${Variables.queryMD}) {
    height: 0;
    margin-top: 0;
    transform: scale(1, 0);
    transform-origin: top;
    transition: all 400ms ease-in-out;
  }
`;

export const MobileToggle = styled.input`
  // exported for Mixins.js
  display: none;
  &:checked ~ ${Nav} {
    // ~ looks for any preceding sibling
    max-height: auto;
    transform: scale(1, 1);
  }
  &:checked ~ ${Nav} a {
    opacity: 1;
  }
`;

const MobileIcon = styled.span`
  visibility: hidden;
  &,
  &::before,
  &::after {
    display: block;
    background: white;
    height: 2px;
    width: 2rem;
    border-radius: 2px;
    position: relative;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    transition: all 0.2s;
  }
  &::before {
    bottom: 0.7rem;
  }
  &::after {
    top: 0.7rem;
  }
  @media (max-width: ${Variables.queryMD}) {
    visibility: visible;
    margin-left: 0.9rem;
    margin-top: 1.9rem;
  }
`;

const MobileBurger = styled.label`
  visibility: hidden;
  background-color: transparent;
  position: absolute;
  right: 0;
  margin-right: 3rem;
  margin-top: 1.5rem;
  height: 4rem;
  width: 4rem;
  &:hover ${MobileIcon}:before {
    bottom: 0.8rem;
  }
  &:hover ${MobileIcon}:after {
    top: 0.8rem;
  }
  ${MobileToggle}:checked + & ${MobileIcon} {
    background-color: transparent;
  }
  ${MobileToggle}:checked + & ${MobileIcon}::before {
    transform: rotate(135deg);
    top: 0;
  }
  ${MobileToggle}:checked + & ${MobileIcon}::after {
    transform: rotate(-135deg);
    top: 0;
  }
  @media (max-width: ${Variables.queryMD}) {
    visibility: visible;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  @media (max-width: ${Variables.queryLG}) {
    gap: 5rem;
  }
  @media (max-width: ${Variables.queryMD}) {
    background-color: ${Variables.colorBlack};
    flex-direction: column;
    gap: 0;
    width: 100vw;
  }
`;

const NormalLink = styled.li`
  ${Mixins.liCleanUp};
  ${Mixins.addHeadingFont(700, 3)};
  text-align: center;
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
  @media (max-width: ${Variables.queryMD}) {
    padding-bottom: 0;
    & span {
      display: none;
    }
  }
`;

const ChildList = styled.ul`
  @media (min-width: ${Variables.queryMD}) {
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
  }
  @media (max-width: ${Variables.queryLG}) {
    min-width: 16rem;
    margin-left: -4.5rem;
  }
  @media (max-width: ${Variables.queryMD}) {
    margin-left: 0;
  }
`;

const ChildLink = styled.li`
@media (min-width: ${Variables.queryMD}) {
    ${Mixins.liCleanUp};
    ${Mixins.addHeadingFont(700, 2.5)};
    text-align: center;
    &:first-child {
      padding-top: 0.5rem;
    }
    &:last-child {
      padding-bottom: 1rem;
    }
  }
`;

const CTA = styled.li`
  text-align: center;
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
  @media (max-width: ${Variables.queryMD}) {
    border: none;
    padding: none;
    color: ${Variables.colorWhite} !important;
    &:hover {
      color: ${Variables.colorGold} !important;
    }
  }
`;
