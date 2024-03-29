import React from "react";
import { connect, styled, css } from "frontity";

import * as Mixins from "../../styles/Mixins";
import * as Variables from "../../styles/Variables";

const LandingContactTab = ({
  contactID,
  sectionHeader,
  sectionDescription,
  video,
  tintWizForm,
}) => {
  return (
    <LandingPageSection id={contactID}>
      <LandingPageGrid>
        <SectionHeader>{sectionHeader}</SectionHeader>
        <Description>{sectionDescription}</Description>
        <VideoFigure>
          <Video {...video} />
        </VideoFigure>
        <LandingContactFigure>
          <Contact {...tintWizForm} height="100%" />
        </LandingContactFigure>
      </LandingPageGrid>
    </LandingPageSection>
  );
};

export default connect(LandingContactTab);

const LandingPageSection = styled.section`
  padding: 3rem 0;
`;

const LandingPageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "title form"
    "desc form"
    "video form";
  column-gap: 4rem;
  width: 75%;
  margin: 0 auto;
  @media (max-width: ${Variables.query800}) {
    display: flex;
    flex-direction: column;
  }
`;

const SectionHeader = styled.h1`
  text-align: center;
  ${Mixins.addHeadingFont(700, 5)};
  text-shadow: ${Variables.textShadow};
  line-height: 1.2;
  padding: 2rem;
  @media (max-width: ${Variables.query800}) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  grid-area: desc;
  font-size: 1.75rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const VideoFigure = styled.figure`
  grid-area: video;
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
`;

const LandingContactFigure = styled.figure`
  grid-area: form;
  @media (max-width: ${Variables.query800}) {
    height: 55rem;
  }
`;

const Contact = styled.iframe`
  min-width: 100%;
  min-height: 100%;
  border: none;
  border-radius: 1rem;
  @media (max-width: ${Variables.query392}) {
    width: 90%;
  }
`;
