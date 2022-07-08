import React from 'react';
import { connect, styled } from 'frontity';

import Navigation from './components/Navigation';
import pcbLOGO from "../assets/pcb-logo-transparent.svg";

import * as Variables from '../styles/Variables';
import * as Mixins from '../styles/Mixins';


function Footer({ state }) {
  const menus = state.source.get('menus');
  const [menuData] = menus.menuData.filter(menu => menu.name === 'Our Pages')

  const {data: assets} = state.source.get('media');
  const media = Object.values(assets);
  const facebookLogo = media.find(asset => asset.slug === 'facebook-footer');
  const yelpLogo = media.find(asset => asset.slug === 'yelp-footer');

  return (
    <StyledFooter>
      <PcbLogo data={pcbLOGO} type="image/svg+xml"></PcbLogo>
      <div>
        <Navigation type='footer' menuNumber={state.theme.footerPagesID} />
        <Navigation type='footer' menuNumber={state.theme.footerResourcesID} />
        <div>
          <h1>Where To Find Us</h1>
          <div>
            <div>Email</div>
            <div>{menuData.acf.email}</div>
          </div>
          <div>
            <div>Phone</div>
            <div>{menuData.acf.phone}</div>
          </div>
          <div>
            <div>Address</div>
            <div>{menuData.acf.top_address}</div>
            <div>{menuData.acf.bottom_address}</div>
            <div>{menuData.acf.hours}</div>
          </div>
        </div>
        <div>
          <div>
            <Social data={facebookLogo.guid.rendered} type="image/svg+xml"></Social>
            <Social data={yelpLogo.guid.rendered} type="image/svg+xml"></Social>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46661.83134146085!2d-97.37785355349327!3d32.76933557693849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e734cf2061099%3A0x8c5e06440f0da472!2sPerformance%20Clear%20Bra!5e0!3m2!1sen!2sus!4v1657234656201!5m2!1sen!2sus" width="400" height="300" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </StyledFooter>
  )
}

export default connect(Footer);

const PcbLogo = styled.object`
  width: 600px;
`;

const StyledFooter = styled.footer`
  background-color: ${Variables.colorBlack};
  color: ${Variables.colorWhite};
`;

const Social = styled.object`
  width: 5rem;
`;