import React from "react";
import { styled, css } from "frontity";
import Link from "@frontity/components/link";

import * as Mixins from "../../styles/Mixins";
import * as Variables from "../../styles/Variables";
import LinkStyles from "../../styles/componentStyles/LinkStyles";

function Card({ title, type, img, description, buttonContent, buttonLink }) {
  return (
    <CardLink link={buttonLink}>
      <Article type={type}>
        <Heading>{title}</Heading>
        <ImgWrapper>
          <Img
            src={img.src}
            alt={img.alt}
            loading={img.loading}
            sizes={img.sizes}
          />
        </ImgWrapper>
        <Description>{description}</Description>
        <Button link={buttonLink} type="secondary">
          {buttonContent}
        </Button>
      </Article>
    </CardLink>
  );
}

export default Card;

const CardLink = styled(Link)`
  &,
  &:active,
  &:visited {
    text-decoration: none;
  }
`;

const Article = styled.article`
  text-align: center;
  border-radius: 0.5rem;
  box-shadow: ${Variables.boxShadow};
  ${(props) =>
    props.type === "services" &&
    css`
      ${Mixins.addColors(Variables.colorBlack, Variables.colorWhite)};
    `};
  ${(props) =>
    props.type === "case-study" &&
    css`
      ${Mixins.addColors(Variables.colorGray1, Variables.colorBlack)};
    `};
  margin: 0 0.5rem;
`;

const Heading = styled.h4`
  ${Mixins.addHeadingFont(400, 3)};
  padding: 1rem 0;
`;

const ImgWrapper = styled.figure`
  width: 60rem;
  margin: 0 auto;
  @media (max-width: ${Variables.queryXXXLG}) {
    width: 50rem;
  }
  @media (max-width: ${Variables.queryLGLG}) {
    width: 45rem;
  }
  @media (max-width: ${Variables.queryLGMD}) {
    width: 40rem;
  }
  @media (max-width: ${Variables.queryMDLG}) {
    width: 50rem;
  }
  @media (max-width: ${Variables.querySMMD}) {
    width: 40rem;
  }
  @media (max-width: ${Variables.querySM}) {
    width: 30rem;
  }
  @media (max-width: ${Variables.queryXSMLG}) {
    width: 25rem;
  }
`;

const addImgAndDescMediaQueries = css`
  @media (max-width: ${Variables.queryXXXLG}) {
    width: 45rem;
  }
  @media (max-width: ${Variables.queryLGLG}) {
    width: 40rem;
  }
  @media (max-width: ${Variables.queryLGMD}) {
    width: 35rem;
  }
  @media (max-width: ${Variables.queryMDLG}) {
    width: 45rem;
  }
  @media (max-width: ${Variables.querySMMD}) {
    width: 35rem;
  }
  @media (max-width: ${Variables.querySM}) {
    max-width: 25rem;
  }
  @media (max-width: ${Variables.queryXSMLG}) {
    max-width: 20rem;
  }
`;

const Img = styled.img`
  width: 55rem;
  ${addImgAndDescMediaQueries};
`;

const Description = styled.p`
  font-size: 1.5rem;
  max-width: 30rem;
  margin: 0 auto;
  padding: 1rem 0;
  ${addImgAndDescMediaQueries};
`;

const Button = styled.div`
  ${(props) => LinkStyles(props.type)};
  ${CardLink}:hover & {
    color: ${Variables.colorRed};
  }
`;
