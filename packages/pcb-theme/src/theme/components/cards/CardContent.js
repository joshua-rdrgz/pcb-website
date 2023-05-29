import React from "react";
import { styled, css } from "frontity";

import * as Mixins from "../../styles/Mixins";
import * as Variables from "../../styles/Variables";
import LinkStyles from "../../styles/componentStyles/LinkStyles";

const CardContent = ({
  type,
  title,
  image,
  description,
  hasButton,
  buttonContent,
}) => {
  switch (type) {
    case "icon":
      return (
        <Article type={type}>
          <ImgWrapper type={type}>
            <Img {...image} width={null} height={null} />
          </ImgWrapper>
          <Heading type={type}>{title}</Heading>
          <Description type={type}>{description}</Description>
          {hasButton && <Button type="secondary">{buttonContent}</Button>}
        </Article>
      );
    case "image-bg":
      return (
        <Article type={type} image={image}>
          <ContentWrapper>
            <Heading type={type}>{title}</Heading>
            <Description type={type}>{description}</Description>
          </ContentWrapper>
          {hasButton && <Button type="secondary">{buttonContent}</Button>}
        </Article>
      );
    default:
      return (
        <Article type={type}>
          <Heading type={type}>{title}</Heading>
          <ImgWrapper type={type}>
            <Img {...image} width={null} height={null} />
          </ImgWrapper>
          <Description type={type}>{description}</Description>
          {hasButton && <Button type="secondary">{buttonContent}</Button>}
        </Article>
      );
  }
};

export default CardContent;

const Article = styled.article`
  text-align: center;
  border-radius: 0.5rem;
  box-shadow: ${Variables.boxShadow};
  margin: 0 0.5rem;
  position: relative;
  ${(props) =>
    props.type === "icon" &&
    css`
      ${Mixins.addColors(Variables.colorGrayDark, Variables.colorWhite)};
    `};
  ${(props) =>
    props.type === "image-bg" &&
    css`
      border-radius: 0;
      height: 30rem;
      color: ${Variables.colorWhite};
      margin: 0;
      background: ${Variables.colorGrayDark};
      background-image: linear-gradient(
          0deg,
          ${Variables.colorBlackPureRGBA},
          ${Variables.colorBlackPureRGBA}
        ),
        url("${props.image.src}");
      background-size: 100% 100%;
      background-repeat: no-repeat;
    `};
  ${(props) =>
    props.type === "normal" &&
    css`
      ${Mixins.addColors(Variables.colorBlack, Variables.colorWhite)};
    `};
`;

const ContentWrapper = styled.div`
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Heading = styled.h3`
  ${(props) =>
    props.type === "image-bg" &&
    css`
      ${Mixins.addHeadingFont(400, 4)};
    `}
  ${(props) => {
    if (props.type === "icon" || props.type === "normal") {
      return css`
        ${Mixins.addHeadingFont(400, 3)};
      `;
    }
  }}
  padding: 1rem;
`;

const ImgWrapper = styled.figure`
  ${(props) =>
    props.type === "normal" &&
    css`
      width: 85%;
      margin: 0 auto;
    `}
  ${(props) =>
    props.type === "icon" &&
    css`
      width: max-content;
      margin: 0 auto;
    `}
`;

const Img = styled.img`
  width: 100%;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin: 0 auto;
  ${(props) => {
    if (props.type === "icon" || props.type === "image-bg") {
      return css`
        max-width: 30rem;
        padding: 0 1rem;
      `;
    }
    if (props.type === "normal") {
      return css`
        max-width: 100%;
        padding: 0 5rem;
        @media (max-width: ${Variables.query875}) {
          padding: 0 3rem;
        }
      `;
    }
  }}
`;

const Button = styled.div`
  ${(props) => LinkStyles(props.type)};
  ${Article}:hover & {
    color: ${Variables.colorRed};
  }
`;
