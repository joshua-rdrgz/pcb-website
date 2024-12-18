import React from "react";
import { styled, css, connect } from "frontity";

import * as Variables from "../../styles/Variables";
import * as Mixins from "../../styles/Mixins";

const VideoTab = ({
  backgroundColor,
  sectionHeader,
  sectionDescription,
  videoContent,
}) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <SectionHeader>{sectionHeader}</SectionHeader>
      <SectionDescription>{sectionDescription}</SectionDescription>
      <VideosContainer>
        {videoContent.map((videoBlock, videoBlockIndex) => {
          const { videoBlockHeader, videoBlockDescription, video } = videoBlock;

          return (
            <VideoWrapper
              backgroundColor={backgroundColor}
              key={`video-${videoBlockIndex}`}
            >
              {videoBlockHeader && (
                <VideoHeader>{videoBlockHeader}</VideoHeader>
              )}
              {videoBlockDescription && (
                <VideoDescription>{videoBlockDescription}</VideoDescription>
              )}
              <Video
                src={video.src}
                loading="lazy"
                title={video.title}
                frameBorder="0"
                allow={video.allow}
                allowFullScreen={true}
              />
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

const SectionHeader = styled.h2`
  text-align: center;
  padding-top: 1.5rem;
  ${Mixins.addHeadingFont(700, 3.5)};
  margin: 0 1rem;
  text-shadow: ${Variables.textShadow};
`;

const SectionDescription = styled.p`
  text-align: center;
  font-size: 1.75rem;
  padding: 0 3rem;
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
  max-width: min-content;
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

const VideoHeader = styled.h3`
  ${Mixins.addHeadingFont(400, 3)};
  text-decoration: underline;
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
  font-size: 1.75rem;
  padding-bottom: 1rem;
  @media (max-width: ${Variables.query600}) {
    padding-bottom: 0;
  }
`;
