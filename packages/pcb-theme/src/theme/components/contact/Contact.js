import React from "react";
import { connect, styled, css } from "frontity";

import * as Mixins from "../../styles/Mixins";
import * as Variables from "../../styles/Variables";

const ContactTab = ({
  sectionHeader,
  sectionDescription,
  contactContentHeader,
  contactContentImg,
  tintWizForm,
}) => {
  return (
    <ContactSection>
      <ContactTitleDiv>
        <H1>{sectionHeader}</H1>
        <ContactSubtitleP>{sectionDescription}</ContactSubtitleP>
      </ContactTitleDiv>
      <ContactContentDiv>
        <H2>{contactContentHeader}</H2>
        <ContactContentGridDiv>
          <ImageFigure>
            <Img {...contactContentImg} />
          </ImageFigure>
          <ContactFormFigure>
            <ContactFormIframe {...tintWizForm} />
          </ContactFormFigure>
        </ContactContentGridDiv>
        <NAPInfoDiv>
          <NAPInfoP>
            Email:{" "}
            <NAPInfoA href="mailto:info@performanceclearbra.com">
              info@performanceclearbra.com
            </NAPInfoA>
          </NAPInfoP>
          <NAPInfoP>
            Phone:{" "}
            <NAPInfoA href="tel:(972)%20295-7068">(972) - 295 - 7068</NAPInfoA>
          </NAPInfoP>
          <NAPInfoP>
            Address:{" "}
            <NAPInfoA
              href="https://www.google.com/maps/place/Performance+Clear+Bra/@32.763217,-97.3587412,17z/data=!4m5!3m4!1s0x864e734cf2061099:0x8c5e06440f0da472!8m2!3d32.763217!4d-97.3565525"
              target="_blank"
            >
              2800 Shamrock Ave. Suite 116, Fort Worth, TX 76107
            </NAPInfoA>
          </NAPInfoP>
          <NAPInfoP>
            Hours: <NAPInfoSpan>Mon - Fri: 9AM - 5PM,</NAPInfoSpan>
            <NAPInfoSpan>Sat - Sun: Closed</NAPInfoSpan>
            <NAPInfoSpan>(by appointment only)</NAPInfoSpan>
          </NAPInfoP>
        </NAPInfoDiv>
      </ContactContentDiv>
    </ContactSection>
  );
};

export default connect(ContactTab);

const ContactSection = styled.section`
  margin: 0 2rem;
`;

const ContactTitleDiv = styled.div`
  margin: 2rem 0;
`;

const H1 = styled.h1`
  ${Mixins.addHeadingFont(400, 3.5)};
  text-align: center;
`;

const ContactSubtitleP = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

const ContactContentDiv = styled.div`
  background-color: ${Variables.colorRedDeep2};
  color: ${Variables.colorWhite};
  border-radius: 0.5rem;
  padding: 0 1rem;
  @media (min-width: ${Variables.query1000}) {
    padding: 0 3rem;
  }
  @media (min-width: ${Variables.query1450}) {
    padding: 0 5rem;
  }
`;

const H2 = styled.h2`
  ${Mixins.addHeadingFont(400, 3)};
  text-align: center;
  padding: 1rem 0;
`;

const ContactContentGridDiv = styled.div`
  @media (min-width: ${Variables.query600}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 20fr 1fr;
  }
  @media (min-width: ${Variables.query1000}) {
    grid-template-columns: 1fr 2fr 1fr;
    height: 70rem;
  }
`;

const ImageFigure = styled.figure`
  @media (min-width: ${Variables.query600}) {
    grid-column: 1 / 3;
    grid-row: 1 / -1;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
`;

const ContactFormFigure = styled.figure`
  @media (min-width: ${Variables.query600}) {
    grid-column: 2 / -1;
    grid-row: 2;
  }
`;

const ContactFormIframe = styled.iframe`
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  height: 88rem;
  @media (min-width: ${Variables.query600}) {
    height: 55rem;
  }
  @media (min-width: ${Variables.query1000}) {
    height: 65rem;
  }
`;

const NAPInfoDiv = styled.div`
  padding: 2rem 0;
  @media (min-width: ${Variables.query1000}) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  @media (min-width: ${Variables.query1200}) {
    max-width: 80%;
    margin: 0 auto;
  }
`;

const NAPInfoP = styled.p`
  text-align: center;
  font-size: 1.5rem;
  @media (min-width: ${Variables.query600}) {
    font-size: 2rem;
  }
`;

const NAPInfoA = styled.a`
  display: block;
  text-decoration: underline;
  color: ${Variables.colorWhite};
  font-size: 1rem;
  @media (min-width: ${Variables.query600}) {
    font-size: 1.5rem;
  }
`;

const NAPInfoSpan = styled.span`
  display: block;
  font-size: 1rem;
  @media (min-width: ${Variables.query600}) {
    font-size: 1.5rem;
  }
`;
