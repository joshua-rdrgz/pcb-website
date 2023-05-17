import React from "react";
import { styled, css } from "frontity";

import * as Mixins from "../../styles/Mixins";
import * as Variables from "../../styles/Variables";

const LongCard = ({ alignment, item1, item2, item3 }) => {
  return (
    <Article alignment={alignment}>
      {alignment === "text-left" ? (
        <SectionHeader>{item1}</SectionHeader>
      ) : (
        <SectionImg src={item1.src} alt={item1.alt} />
      )}
      {alignment === "text-left" ? (
        <SectionText>{item2}</SectionText>
      ) : (
        <SectionHeader>{item2}</SectionHeader>
      )}
      {alignment === "text-left" ? (
        <SectionImg src={item3.src} alt={item3.alt} />
      ) : (
        <SectionText>{item3}</SectionText>
      )}
    </Article>
  );
};

export default LongCard;

const Article = styled.article`
  background-color: ${Variables.colorGrayLight2};
  border-radius: 1rem;
  box-shadow: ${Variables.boxShadow};
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 40% 60%;
  ${(props) => {
    return (
      props.alignment === "text-left" &&
      css`
        grid-template-areas:
          "title img"
          "text img";
      `
    );
  }}
  ${(props) => {
    return (
      props.alignment === "text-right" &&
      css`
        grid-template-areas:
          "img title"
          "img text";
      `
    );
  }}
  @media (max-width: ${Variables.query925}) {
    grid-template-areas:
      "title"
      "text"
      "img";
    grid-template-rows: auto;
    text-align: center;
  }
`;

const SectionHeader = styled.h4`
  ${Mixins.addHeadingFont(400, 3)};
  padding: 0 3rem;
  align-self: end;
`;

const SectionText = styled.p`
  font-size: 1.5rem;
  padding: 0 3rem;
`;

const SectionImg = styled.img`
  width: 100%;
  border-radius: 2rem;
  padding: 1rem;
  grid-area: img;
  @media (max-width: ${Variables.query925}) {
    max-width: 75%;
    margin: 0 auto;
  }
`;
