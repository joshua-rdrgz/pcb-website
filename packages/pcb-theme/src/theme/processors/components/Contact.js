import React from "react";
import { connect, styled, css } from "frontity";

import * as Mixins from "../../styles/Mixins";
import * as Variables from "../../styles/Variables";

const ContactTab = ({
  state,
  sectionHeader,
  secondItem,
  thirdItem,
  contact,
}) => {
  if (state.theme.isLandingPage) {
    return (
      <LandingPageSection>
        <LandingPageGrid>
            <SectionHeader>{sectionHeader}</SectionHeader>
            <Description>{secondItem}</Description>
            <VideoFigure>
              <Video
                allow={thirdItem.allow}
                allowFullScreen={thirdItem.allowFullScreen}
                frameBorder={thirdItem.frameBorder}
                height={thirdItem.height}
                width={thirdItem.width}
                loading={thirdItem.loading}
                src={thirdItem.src}
                title={thirdItem.title}
              />
            </VideoFigure>
            <LandingContactFigure>
              <Contact src={contact.src} />
            </LandingContactFigure>
        </LandingPageGrid>
      </LandingPageSection>
    );
  } else {
    return (
      <section>
        <SectionHeader>{sectionHeader}</SectionHeader>
        <GridPageContainer>
          <GridContainer>
            <SubHeader>{secondItem}</SubHeader>
            <Grid>
              <ImgFigure>
                <Img src={thirdItem.src} alt={thirdItem.alt} />
              </ImgFigure>
              <ContactFigure>
                <Contact src={contact.src} />
              </ContactFigure>
            </Grid>
          </GridContainer>
        </GridPageContainer>
      </section>
    );
  }
};

export default connect(ContactTab);

const LandingPageSection = styled.section`
  background-color: ${Variables.colorGray1};
  padding: 3rem 0;
`;

const LandingPageGrid= styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "title form"
    "desc form"
    "video form";
  column-gap: 4rem;
  width: 75%;
  margin: 0 auto;
  @media (max-width: ${Variables.queryMD}) {
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
  @media (max-width: ${Variables.queryMD}) {
    font-size: 3rem;
  }
`;

const SubHeader = styled.h2`
  text-align: center;
  ${Mixins.addHeadingFont(400, 3)};
  text-shadow: ${Variables.textShadow};
  line-height: 1.2;
  padding: 2rem;
  color: white;
`;

const Description = styled.p`
  grid-area: desc;
  font-size: 1.75rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const addMediaQueries = css`
  @media (max-width: ${Variables.queryMDLG}) {
    height: 155rem;
  }
  @media (max-width: ${Variables.queryMD}) {
    height: 152rem;
  }
  @media (max-width: ${Variables.queryMDMD}) {
    height: 148rem;
  }
  @media (max-width: ${Variables.queryMDSMMD}) {
    height: 145rem;
  }
  @media (max-width: ${Variables.queryMDSM}) {
    height: 140rem;
  }
  @media (max-width: ${Variables.querySMMD}) {
    height: 133rem;
  }
  @media (max-width: ${Variables.querySM}) {
    height: 129rem;
  }
  @media (max-width: ${Variables.querySMSM}) {
    height: 126rem;
  }
  @media (max-width: ${Variables.queryXSM}) {
    height: 125rem;
  }
`;

const GridPageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 85rem;
  margin-bottom: 2rem;
  ${addMediaQueries};
`;

const GridContainer = styled.div`
  background-color: ${Variables.colorRedDeep2};
  width: 95%;
  height: 85rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  ${addMediaQueries};
`;

const Grid = styled.article`
  width: 95%;
  height: 71rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-rows: 1fr 20fr 1fr;
  @media (max-width: ${Variables.queryMDLG}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 89rem;
    left: 2.5%;
    top: 5%;
    right: 2.5%;
    transform: none;
  }
  @media (max-width: ${Variables.queryXSM}) {
    transform: translateY(3rem);
  }
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

const ImgFigure = styled.figure`
  grid-column: 1 / 3;
  grid-row: 1 / -1;
  @media (max-width: ${Variables.queryMDLG}) {
    grid-column: 1;
    grid-row: 1 / 2;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;
`;

const ContactFigure = styled.figure`
  grid-column: 2 / -1;
  grid-row: 2 / 3;
  @media (max-width: ${Variables.queryMDLG}) {
    grid-column: 1;
    grid-row: 2 / -1;
  }
`;

const LandingContactFigure = styled.figure`
  grid-area: form;
  @media (max-width: ${Variables.queryMD}) {
    height: 55rem;
  }
`;

const Contact = styled.iframe`
  min-width: 100%;
  min-height: 100%;
  border: none;
  border-radius: 1rem;
  @media (max-width: ${Variables.queryXSM}) {
    width: 90%;
  }
`;
