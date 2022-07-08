import React from "react";
import { connect } from "frontity";

import * as HNS from "../../styles/layoutStyles/HeaderNavStyles";
import * as FNS from "../../styles/layoutStyles/FooterNavStyles";

function Navigation({ state, menuNumber, type }) {
  // Fetch Menus
  const menus = state.source.get("menus");
  const typeOfNav = type;

  const renderNav = function (type, styled) {
    if (type === "header") {
      return (
        <>
          <styled.MobileToggle type="checkbox" id="mobile-toggle" />
          <styled.MobileBurger htmlFor="mobile-toggle">
            <styled.MobileIcon>&nbsp;</styled.MobileIcon>
          </styled.MobileBurger>
          <styled.Nav>
            <styled.NavList>
              {menus.navLinks
                .filter((link) => link.menus === menuNumber)
                .map((link) => {
                  if (link.acf.parent === "yes") {
                    const parent = link;
                    let childItemsObj = [];
                    childItemsObj.push(
                      menus.navLinks.filter((link) => link.parent === parent.id)
                    );
                    return (
                      <styled.ParentLink key={link.id} id={link.id}>
                        <span>{link.title.rendered}</span>
                        {/* Font-Awesome drop-down icon here */}
                        <styled.ChildList>
                          {childItemsObj[0].map((child) => {
                            return (
                              <styled.ChildLink key={child.id} id={child.id}>
                                <styled.StyledLink link={child.url}>
                                  {child.title.rendered}
                                </styled.StyledLink>
                              </styled.ChildLink>
                            );
                          })}
                        </styled.ChildList>
                      </styled.ParentLink>
                    );
                  }
                  if (link.acf.cta === "yes") {
                    return (
                      <styled.CTA key={link.id} id={link.id}>
                        <styled.StyledCTA link={link.url}>
                          {link.title.rendered}
                        </styled.StyledCTA>
                      </styled.CTA>
                    );
                  }
                  if (link.parent === 0) {
                    return (
                      <styled.NormalLink key={link.id} id={link.id}>
                        <styled.StyledLink link={link.url}>
                          {link.title.rendered}
                        </styled.StyledLink>
                      </styled.NormalLink>
                    );
                  }
                })}
            </styled.NavList>
          </styled.Nav>
        </>
      );
    }
    if (type === "footer") {
      const [ menuData ] = menus.menuData.filter(
        (menu) => menu.id === menuNumber
      );
      return (
        <styled.Nav>
          <styled.Title>{menuData.name}</styled.Title>
          <styled.NavList>
            {menus.navLinks
              .filter(link => link.menus === menuNumber)
              .map((link) => {
                return (
                  <styled.NavItem key={link.id} id={link.id}>
                    <styled.StyledLink link={link.url}>
                      {link.title.rendered}
                    </styled.StyledLink>
                  </styled.NavItem>
                );
              })}
          </styled.NavList>
        </styled.Nav>
      );
    }
  };

  return renderNav(typeOfNav, typeOfNav === "header" ? HNS : FNS);
}

export default connect(Navigation);
