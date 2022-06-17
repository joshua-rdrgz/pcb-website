import React from "react";
import { connect, styled, css } from "frontity";
import * as Mixins from '../styles/Mixins';
import * as Variables from '../styles/Variables';

import Link from "@frontity/components/link";

// assets import
import facebookSVG from "../assets/facebook.svg";
import yelpSVG from "../assets/yelp.svg";

function Header({ route, state, actions, libraries }) {
  // Fetch Menus
  const menus = state.source.get("menus");
  console.log(menus);

  return (
    <header>
      <TopBarContainer>
        <CallBlock>
          {menus.menuData[0].acf.phone}
        </CallBlock>
        <AddressBlock>
          {menus.menuData[0].acf.address}
        </AddressBlock>
        <SocialsBlock>
          <object data={facebookSVG} type="image/svg+xml"></object>
          <object data={yelpSVG} type="image/svg+xml"></object>
        </SocialsBlock>
      </TopBarContainer>
      <MainBarContainer>
        <div>Logo</div>
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
                      <ul>
                        {childItems.map((item) => {
                          return (
                            <ChildLink key={item.id} id={item.id}>
                              {item.title.rendered}
                            </ChildLink>
                          );
                        })}
                      </ul>
                    </ParentLink>
                  );
                }
                if (link.acf.cta === "yes") {
                  return (
                    <CTA key={link.id} id={link.id}>
                      <StyledLink link={link.url}>{link.title.rendered}</StyledLink>
                    </CTA>
                  );
                }
                if (link.parent === 0) {
                  return (
                    <NormalLink key={link.id} id={link.id}>
                      <StyledLink link={link.url}>{link.title.rendered}</StyledLink>
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


const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  ${Mixins.addColors(Variables.colorRedDeep2, Variables.colorWhite)}
  ${Mixins.addHeadingFont(400, 2)}
`;

const CallBlock = styled.div`
  padding-right: 10rem;
`

const AddressBlock = styled.div`
  padding-right: 25rem;
`

const SocialsBlock = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`

const MainBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Nav = styled.nav`

`

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 10rem;
`

const NormalLink = styled.li`
  background-color: pink;
  ${Mixins.liCleanUp}
`;

const ParentLink = styled.li`
  background-color: red;
  ${Mixins.liCleanUp}
`;

const ChildLink = styled.li`
  background-color: purple;
  ${Mixins.liCleanUp}
  display: none;
  ${ParentLink}:hover & {
    display: block;
  }
`;

const CTA = styled.li`
  background-color: yellow;
  ${Mixins.liCleanUp}
  
`;


const StyledLink = styled(Link)`
  ${Mixins.aCleanUp}
`