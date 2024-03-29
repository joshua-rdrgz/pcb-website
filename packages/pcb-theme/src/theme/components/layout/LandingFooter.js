import React from "react";
import { connect, styled } from "frontity";

import Link from "@frontity/components/link";

import LinkStyles from "../../styles/componentStyles/LinkStyles";
import * as Variables from "../../styles/Variables";
import * as Mixins from "../../styles/Mixins";

import pcbLOGO from "../../assets/pcb-logo.svg";

const LandingFooter = ({ state }) => {
  const isPPF = state.router.link.includes("clear-bra");
  return (
    <Footer>
      <Heading>
        Discover the highest level of
        {isPPF ? " paint protection" : " window tinting"} in Texas
      </Heading>
      <PCBLogo src={pcbLOGO} alt="Performance Clear Bra Logo" />
      <ButtonContainer>
        <CTALink type="primary" link="tel:(972)%20295-7068">
          (972) 295 - 7068
        </CTALink>
        <CTAButton
          type="primary"
          onClick={() => {
            let contact = document.getElementById("landingContact");
            contact && window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Get My Quote
        </CTAButton>
      </ButtonContainer>
      <MapContainer>
        <Map
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3355.0947054584685!2d-97.3587412!3d32.7632215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e734cf2061099%3A0x8c5e06440f0da472!2sPerformance%20Clear%20Bra!5e0!3m2!1sen!2sus!4v1664832446655!5m2!1sen!2sus"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          width="600"
          height="450"
        ></Map>
      </MapContainer>
      <PrivacyLink link="/privacy-policy">Privacy Policy</PrivacyLink>
    </Footer>
  );
};

export default connect(LandingFooter);

const Footer = styled.footer`
  background-color: ${Variables.colorBlack};
  color: ${Variables.colorWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.span`
  margin-top: 2rem;
  ${Mixins.addHeadingFont(400, 4)};
  text-align: center;
  margin: 0 1rem;
  margin-top: 4rem;
`;

const PCBLogo = styled.img`
  width: 600px;
  height: 214px;
  display: block;
  margin: 0 auto;
  @media (max-width: ${Variables.query1000}) {
    width: 500px;
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

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;

const CTALink = styled(Link)`
  border: none;
  ${(props) => LinkStyles(props.type)};
  padding: 0.5rem 1.5rem;
  font-size: 3rem;
  @media (max-width: ${Variables.query420}) {
    margin: 0;
    margin-bottom: 1.5rem;
  }
`;

const CTAButton = styled.button`
  border: none;
  ${(props) => LinkStyles(props.type)};
  padding: 0.5rem 1.5rem;
  font-size: 3rem;
  @media (max-width: ${Variables.query420}) {
    margin: 0;
    margin-bottom: 1.5rem;
  }
`;

const MapContainer = styled.div`
  overflow: hidden;
  padding-bottom: 20%;
  position: relative;
  height: 0;
  width: 100%;
  @media (max-width: ${Variables.query1000}) {
    padding-bottom: 40%;
  }
  @media (max-width: ${Variables.query600}) {
    padding-bottom: 50%;
  }
`;

const Map = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
`;

const PrivacyLink = styled(Link)`
  ${Mixins.aCleanUp(Variables.colorRedBright2)};
  font-size: 2rem;
  margin: 4rem 0;
  &:hover {
    color: ${Variables.colorGold};
  }
`;
