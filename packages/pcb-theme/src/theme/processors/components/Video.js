import React from "react";
import { styled, css, connect } from "frontity";

import * as Variables from "../../styles/Variables";
import * as Mixins from "../../styles/Mixins";

const VideoTab = ({ backgroundColor, sectionHeader, video }) => {

  return (
    <Section backgroundColor={backgroundColor}>
      <SectionHeader>{sectionHeader}</SectionHeader>
      <VideoWrapper>
        <Video
          src={video.src}
          loading="lazy"
          title={video.title}
          frameBorder="0"
          allow={video.allow}
          allowFullScreen={true}
        />
      </VideoWrapper>
    </Section>
  );
};

export default connect(VideoTab);

const Section = styled.section`
  ${props => props.backgroundColor === 'dark' && Mixins.addColors(Variables.colorBlack, Variables.colorWhite)}
`;

const SectionHeader = styled.h3`
  text-align: center;
  padding-top: 1.5rem;
  ${Mixins.addHeadingFont(700, 3.5)};
  text-shadow: ${Variables.textShadow};
`;

const VideoWrapper = styled.figure`
  position: relative;
  overflow: hidden;
  padding-top: 53.5%;
  transform: scale(0.85);
  margin: 0 auto;
  padding-bottom: 3rem;
  box-shadow: ${Variables.boxShadow};
`;

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
