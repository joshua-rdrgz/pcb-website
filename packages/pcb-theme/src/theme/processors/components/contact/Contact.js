import React from "react";
import { connect, styled, css } from "frontity";

import * as Mixins from "../../../styles/Mixins";
import * as Variables from "../../../styles/Variables";

const ContactTab = ({ sectionHeader, secondItem, thirdItem, contact }) => {
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
};

export default connect(ContactTab);

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

const Contact = styled.iframe`
  min-width: 100%;
  min-height: 100%;
  border: none;
  border-radius: 1rem;
  @media (max-width: ${Variables.queryXSM}) {
    width: 90%;
  }
`;
