import React, { useEffect, useRef } from "react";
import { connect } from "frontity";

import * as HNS from "../../styles/layoutStyles/HeaderNavStyles";
import * as FNS from "../../styles/layoutStyles/FooterNavStyles";

function Navigation({ state, actions, menuNumber, type }) {
  // Fetch Menus
  const menus = state.source.get("menus");
  const typeOfNav = type;

  // Mobile Menu Checkbox Ref
  const mobileMenuCheckbox = useRef();

  const menuInfo = menus.navLinks.filter((link) => link.menus === menuNumber);
  const currentMenuIndex = menuInfo[0].menus - 3;

  useEffect(() => {
    actions.theme.header.initActiveTabs(menuInfo);
  }, []);

  useEffect(() => {
    if (typeOfNav === "header") {
      mobileMenuCheckbox.current.checked = false;
    }
    actions.theme.header.setActiveTab(menuInfo, currentMenuIndex);
  }, [state.router.link]);

  const renderNav = function (type, styled) {
    if (type === "header") {
      return (
        <>
          <styled.MobileToggle
            type="checkbox"
            id="mobile-toggle"
            ref={mobileMenuCheckbox}
          />
          <styled.MobileBurger htmlFor="mobile-toggle">
            <styled.MobileIcon>&nbsp;</styled.MobileIcon>
          </styled.MobileBurger>
          <styled.Nav>
            <styled.NavList>
              {menuInfo.map((link, regIndex) => {
                if (link.acf.parent === "yes") {
                  const parent = link;
                  let childItemsObj = [];
                  childItemsObj.push(
                    menus.navLinks.filter((link) => link.parent === parent.id)
                  );
                  return (
                    <styled.ParentLink
                      key={link.id}
                      id={link.id}
                      isActive={
                        state.theme.header.menuActiveTabs[currentMenuIndex]?.[
                          regIndex
                        ]
                      }
                    >
                      <span>{link.title.rendered}</span>
                      <styled.ParentIcon>&nbsp;</styled.ParentIcon>
                      <styled.ChildList>
                        {childItemsObj[0].map((child, smallIndex) => {
                          const childIndex = regIndex + (smallIndex + 1);
                          return (
                            <styled.ChildLink key={child.id} id={child.id}>
                              <styled.StyledLink
                                link={child.url}
                                state={{
                                  isActive:
                                    state.theme.header.menuActiveTabs[
                                      currentMenuIndex
                                    ]?.[childIndex],
                                }}
                              >
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
                      <styled.StyledLink
                        link={link.url}
                        state={{
                          isActive:
                            state.theme.header.menuActiveTabs[
                              currentMenuIndex
                            ]?.[regIndex],
                        }}
                      >
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
      const [menuData] = menus.menuData.filter(
        (menu) => menu.id === menuNumber
      );
      return (
        <styled.Nav>
          <styled.Title>{menuData.name}</styled.Title>
          <styled.NavList>
            {menuInfo.map((link, regIndex) => {
              return (
                <styled.NavItem key={link.id} id={link.id}>
                  <styled.StyledLink
                    link={link.url}
                    state={{
                      isActive:
                        state.theme.header.menuActiveTabs[currentMenuIndex]?.[
                          regIndex
                        ],
                    }}
                  >
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
