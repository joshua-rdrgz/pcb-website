import React from "react";
import { styled, connect, css } from "frontity";
import Link from "@frontity/components/link";
import Card from "./Card";

import * as Mixins from "../../../styles/Mixins";
import * as Variables from "../../../styles/Variables";
import LinkStyles from "../../../styles/componentStyles/LinkStyles";

const ServiceCards = ({
  sectionHeader,
  cards,
  buttons,
  isDarkTheme,
  isIcon,
  isImageBg,
}) => {
  let cardType;
  if (isIcon) cardType = "icon";
  if (isImageBg) cardType = "image-bg";
  if (!isIcon && !isImageBg) cardType = "normal";

  return (
    <Section isDarkTheme={isDarkTheme}>
      <Heading isDarkTheme={isDarkTheme} type={cardType}>
        {sectionHeader}
      </Heading>
      <Cards type={cardType}>
        {cards.map((card, cardIndex) => {
          return (
            <Card
              key={cardIndex + 1}
              type={cardType}
              title={card.title}
              image={card.image}
              description={card.description}
              buttonContent={card.button.content}
              buttonLink={card.button.link}
              isDarkTheme={isDarkTheme}
            />
          );
        })}
      </Cards>
      <Buttons>
        {buttons.length > 0 &&
          buttons.map((button, buttonIndex) => {
            const { buttonLink, buttonContent } = button;
            return (
              <Button type="primary" link={buttonLink} key={buttonIndex}>
                {buttonContent}
              </Button>
            );
          })}
      </Buttons>
    </Section>
  );
};

export default connect(ServiceCards);

const Section = styled.section`
  ${(props) =>
    props.isDarkTheme &&
    css`
      background-color: ${Variables.colorBlack};
    `};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
`;

const Heading = styled.h3`
  ${(props) => {
    if (props.type === "icon" || props.type === "image-bg") {
      return css`
        &:after {
          content: "";
          display: block;
          margin: 0 auto;
          width: 15rem;
          padding-top: 5px;
          border-bottom: 5px ${Variables.colorRedBright1} solid;
        }
      `;
    }
  }}
  ${(props) =>
    props.isDarkTheme &&
    css`
      color: ${Variables.colorWhite};
    `};
  text-align: center;
  margin-top: 1.5rem;
  ${Mixins.addHeadingFont(700, 3.5)};
  text-shadow: ${Variables.textShadow};
`;

const Cards = styled.div`
  display: grid;
  ${(props) =>
    props.type === "normal" &&
    css`
      width: 80%;
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
      row-gap: 2rem;
    `}
  ${(props) =>
    props.type === "icon" &&
    css`
      width: 90%;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      row-gap: 1rem;
    `}
  ${(props) =>
    props.type === "image-bg" &&
    css`
      grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
      width: 85%;
      position: relative;
    `}
  margin: 0 auto;
  @media (max-width: ${Variables.queryXSM}) {
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  padding: 0 1.5rem;
`;

const Button = styled(Link)`
  ${(props) => LinkStyles(props.type, props.fontSize)};
  margin: 0;
`;
