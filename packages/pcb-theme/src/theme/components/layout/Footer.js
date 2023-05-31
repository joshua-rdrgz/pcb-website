import React from "react";
import { connect, styled, css } from "frontity";

import Link from "@frontity/components/link";
import Navigation from "./Navigation";

import * as Variables from "../../styles/Variables";
import * as Mixins from "../../styles/Mixins";
import { footerSection } from "../../styles/layoutStyles/FooterNavStyles";

import pcbLOGO from "../../assets/pcb-logo.svg";

function Footer({ state }) {
  const menus = state.source.get("menus");
  const [menuData] = menus.menuData.filter(
    (menu) => menu.locations[0] === "footer"
  );

  const { data: assets } = state.source.get("media");
  const media = Object.values(assets);
  const facebookLogo = media.find((asset) => asset.slug === "facebook-footer");
  const yelpLogo = media.find((asset) => asset.slug === "yelp-footer");
  const youtubeLogo = media.find((asset) => asset.slug === "youtube-footer");
  const instagramLogo = media.find(
    (asset) => asset.slug === "instagram-footer"
  );

  return (
    <StyledFooter>
      <Link link="/">
        <PcbLogo src={pcbLOGO} alt="Performance Clear Bra Logo"></PcbLogo>
      </Link>
      <FancyLinesContainer>
        <FancyLines />
      </FancyLinesContainer>
      <FooterGrid>
        <AboutDiv>
          <AboutPHeader>Trusted Protection</AboutPHeader>
          <AboutPDescription>{`At Performance Clear Bra, protecting your vehicle is the passion that drives what we do.  That’s why we set the highest standards for ourselves to meet your paint protection needs.  From choosing what products go on your vehicle to looking at the finest of details in our clear bra installations, we have two quality standards that are met on every car we work on: 1) everything performs exceptionally well, and 2) it does so for a very long time.  With our SunTek certified installers having over 30+ years of combined industry experience, we guarantee your car will receive the highest quality of care that you can find in Dallas-Fort Worth.  We put those years of experience to work for you by selecting the finest products and using the most advanced installation methods to make sure your vehicle gets the best long-term protection.`}</AboutPDescription>
        </AboutDiv>
        <Navigation type="footer" menuNumber={state.theme.footerPagesID} />
        <Navigation type="footer" menuNumber={state.theme.footerResourcesID} />
        <WhereToFindUs>
          <Title>Where To Find Us</Title>
          <div>
            <Label>Email</Label>
            <Link link="mailto:info@performanceclearbra.com">
              <Data isUnderlined={true}>{menuData.acf.email}</Data>
            </Link>
          </div>
          <div>
            <Label>Phone (or Text)</Label>
            <Data>
              <PhoneLink link="tel:(972)%20295-7068">
                {menuData.acf.phone}
              </PhoneLink>
            </Data>
          </div>
          <div>
            <Label>Address</Label>
            <Link
              link="https://www.google.com/maps/place/Performance+Clear+Bra/@32.763217,-97.3587412,17z/data=!4m5!3m4!1s0x864e734cf2061099:0x8c5e06440f0da472!8m2!3d32.763217!4d-97.3565525"
              target="_blank"
            >
              <Data isUnderlined={true}>{menuData.acf.top_address}</Data>
              <Data isUnderlined={true}>{menuData.acf.bottom_address}</Data>
            </Link>
            <Data>{menuData.acf.hours}</Data>
          </div>
        </WhereToFindUs>
        <div>
          <Socials>
            <object
              data={facebookLogo.guid.rendered}
              type="image/svg+xml"
              width="50"
              height="50"
            ></object>
            <object
              data={yelpLogo.guid.rendered}
              type="image/svg+xml"
              width="50"
              height="50"
            ></object>
            <object
              data={youtubeLogo.guid.rendered}
              type="image/svg+xml"
              width="50"
              height="50"
            ></object>
            <object
              data={instagramLogo.guid.rendered}
              type="image/svg+xml"
              width="50"
              height="50"
            ></object>
          </Socials>
          <Map
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46661.83134146085!2d-97.37785355349327!3d32.76933557693849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e734cf2061099%3A0x8c5e06440f0da472!2sPerformance%20Clear%20Bra!5e0!3m2!1sen!2sus!4v1657234656201!5m2!1sen!2sus"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></Map>
        </div>
      </FooterGrid>
    </StyledFooter>
  );
}

export default connect(Footer);

const StyledFooter = styled.footer`
  background-color: ${Variables.colorBlackPure};
  color: ${Variables.colorWhite};
  padding-top: 10rem;
  padding-bottom: 10rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: ${Variables.query1000}) {
    padding-top: 5rem;
  }
`;

const FooterGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 7rem;
  flex-wrap: wrap;
  margin: 0 5rem;
  @media (max-width: ${Variables.query800}) {
    text-align: center;
    gap: 3rem;
  }
`;

const AboutDiv = styled.div`
  text-align: center;
`;

const AboutPHeader = styled.p`
  ${Mixins.addHeadingFont(400, 4)};
`;

const AboutPDescription = styled.p`
  font-size: 1.5rem;
  @media (max-width: ${Variables.query400}) {
    font-size: 1.25rem;
  }
`;

const PcbLogo = styled.img`
  width: 600px;
  height: 214px;
  display: block;
  margin: 0 auto;
  @media (max-width: ${Variables.query1000}) {
    width: 500px;
  }
  @media (max-width: ${Variables.query750}) {
    border-bottom: 0.5px solid ${Variables.colorGray1};
    margin-bottom: 3rem;
  }
  @media (max-width: ${Variables.query650}) {
    width: 400px;
  }
  @media (max-width: ${Variables.query490}) {
    width: 300px;
  }
  @media (max-width: ${Variables.query400}) {
    width: 250px;
  }
`;

const FancyLinesContainer = styled.div`
  position: relative;
  content: "";
  margin: 0 auto;
  width: 75rem;
  height: 0.5rem;
  margin-bottom: 3rem;
  @media (max-width: ${Variables.query750}) {
    display: none;
  }
`;

const FancyLines = styled.div`
  &::before,
  &::after {
    content: "";
    width: 40rem;
    height: 0.5px;
    background: ${Variables.colorGray1};
    position: absolute;
  }
  &::before {
    top: 0.5rem;
    left: 19rem;
  }
  &::after {
    right: 19rem;
  }
  @media (max-width: ${Variables.query750}) {
    display: none;
  }
`;

const WhereToFindUs = styled.div`
  ${footerSection(20)};
`;

const Title = styled.span`
  border-bottom: ${Variables.footerBorder};
  ${Mixins.addHeadingFont(400, 3)};
`;

const Label = styled.span`
  ${Mixins.addHeadingFont(400, 2.5)};
`;

const Data = styled.div`
  font-size: 1.25rem;
  ${Mixins.aCleanUp(Variables.colorWhite)};
  ${(props) =>
    props.isUnderlined &&
    css`
      text-decoration: underline;
      cursor: pointer;
    `}
`;

const PhoneLink = styled(Link)`
  color: ${Variables.colorWhite};
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Map = styled.iframe`
  width: 400px;
  height: 300px;
  @media (max-width: ${Variables.query490}) {
    width: 300px;
    height: 200px;
  }
  @media (max-width: ${Variables.query392}) {
    width: 250px;
    height: 150px;
  }
`;
