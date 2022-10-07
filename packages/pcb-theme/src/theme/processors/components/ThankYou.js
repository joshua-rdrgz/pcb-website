import React from "react";
import { styled, css } from "frontity";

import * as Mixins from "../../styles/Mixins";
import * as Variables from "../../styles/Variables";

const ThankYou = ({ header, subHeader, image }) => {
  return (
    <Section image={image.src}>
      <Content>
        <Header>{header}</Header>
        <SubHeader>{subHeader}</SubHeader>
      </Content>
    </Section>
  );
};

export default ThankYou;

const Section = styled.section`
  ${(props) => css`
    background-image: linear-gradient(
        0deg,
        ${Variables.colorBlackPureRGBA},
        ${Variables.colorBlackPureRGBA}
      ),
      url("${props.image}");
  `}
  background-size: 100% 100%;
  ${Mixins.addColors(Variables.colorBlack, Variables.colorWhite)};
  height: 80rem;
  text-align: center;
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Header = styled.h1`
  ${Mixins.addHeadingFont(700, 6)};
  margin: auto;
`;

const SubHeader = styled.p`
  font-size: 3.5rem;
`;
