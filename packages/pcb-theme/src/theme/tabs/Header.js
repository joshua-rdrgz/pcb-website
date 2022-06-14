import React, { useEffect } from "react";
import { connect } from "frontity";

// assets import
import facebookSVG from '../assets/facebook.svg';
import yelpSVG from '../assets/yelp.svg';

function Header({ route, state, actions, libraries }) {
  const menus = state.source.get('menus')
  console.log(menus);

  return (
    <header>
      <div>
        <div>
          <span>{menus.menuData[0].acf.phone}</span>
        </div>
        <div>
          <span>{menus.menuData[0].acf.address}</span>
        </div>
        <div>
          <object data={facebookSVG} type="image/svg+xml"></object>
          <object data={yelpSVG} type="image/svg+xml"></object>
        </div>
      </div>
      <div>
        <div>
          Logo
        </div>
        <nav>
          Nav
        </nav>
      </div>
    </header>
  );
}

export default connect(Header);
