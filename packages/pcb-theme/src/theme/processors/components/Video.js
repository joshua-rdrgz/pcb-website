import React from "react";
import { styled, css, connect } from "frontity";

import * as Variables from "../../styles/Variables";
import * as Mixins from "../../styles/Mixins";

const VideoTab = ({ backgroundColor, sectionHeader, videoContent }) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <SectionHeader>{sectionHeader}</SectionHeader>
      <VideosContainer>
        {videoContent.map((videoBlock, videoBlockIndex) => {
          const videoBlockHeader =
            videoBlock[0] === null ? null : videoBlock[0];
          const video = videoBlock[1];
          const videoBlockDescription =
            videoBlock[2] === null ? null : videoBlock[2];

          return (
            <VideoWrapper
              backgroundColor={backgroundColor}
              key={`video-${videoBlockIndex}`}
            >
              {videoBlockHeader && (
                <VideoHeader>{videoBlockHeader}</VideoHeader>
              )}
              <Video
                src={video.src}
                loading="lazy"
                title={video.title}
                frameBorder="0"
                allow={video.allow}
                allowFullScreen={true}
              />
              {videoBlockDescription && (
                <VideoDescription>{videoBlockDescription}</VideoDescription>
              )}
            </VideoWrapper>
          );
        })}
      </VideosContainer>
    </Section>
  );
};

export default connect(VideoTab);

const Section = styled.section`
  ${(props) =>
    props.backgroundColor === "dark" &&
    Mixins.addColors(Variables.colorBlack, Variables.colorWhite)};
`;

const SectionHeader = styled.h3`
  text-align: center;
  padding-top: 1.5rem;
  ${Mixins.addHeadingFont(700, 3.5)};
  margin: 0 1rem;
  text-shadow: ${Variables.textShadow};
`;

const VideosContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 3rem;
`;

const VideoWrapper = styled.figure`
  padding: 1rem 3rem;
  margin: 3rem 2rem 5rem 2rem;
  background-color: ${(props) =>
    props.backgroundColor === "dark" && Variables.colorRedDeep1};
  border-radius: 1rem;
  text-align: center;
  @media (max-width: ${Variables.query1000}) {
    margin: 0 2rem;
    &:last-child {
      margin-bottom: 4rem;
    }
  }
  @media (max-width: ${Variables.query600}) {
    padding: 1rem;
  }
`;

const VideoHeader = styled.h4`
  ${Mixins.addHeadingFont(400, 2.5)};
  padding-bottom: 1rem;
  @media (max-width: ${Variables.query600}) {
    padding-bottom: 0;
  }
`;

const Video = styled.iframe`
  width: 60rem;
  height: 32rem;
  box-shadow: ${Variables.boxShadow};
  @media (max-width: ${Variables.query1450}) {
    width: 50rem;
    height: 28rem;
  }
  @media (max-width: ${Variables.query1250}) {
    width: 35rem;
    height: 19rem;
  }
  @media (max-width: ${Variables.query1000}) {
    width: 60rem;
    height: 32rem;
  }
  @media (max-width: ${Variables.query750}) {
    width: 50rem;
    height: 28rem;
  }
  @media (max-width: ${Variables.query600}) {
    width: 35rem;
    height: 19rem;
  }
  @media (max-width: ${Variables.query600}) {
    width: 35rem;
    height: 19rem;
  }
  @media (max-width: ${Variables.query400}) {
    width: 26rem;
    height: 14rem;
  }
`;

const VideoDescription = styled.p`
  font-size: 2rem;
`;
