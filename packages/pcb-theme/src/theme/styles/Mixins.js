import { css } from "frontity";
import * as Variables from "./Variables";

export const liCleanUp = () => css`
  list-style: none;
  &:hover {
    cursor: pointer;
  }
`;

export const aCleanUp = (color, active = null) => css`
  text-decoration: none;
  color: ${color};
  &:link,
  &:visited {
    color: ${color};
  }
  ${active &&
  css`
    &:link,
    &:visited {
      color: ${Variables.colorGoldDeep1};
    }
  `}
`;

export const addHeadingFont = (fontWeight, fontSize) => css`
  font-family: trade-gothic-next-compressed, sans-serif;
  font-weight: ${fontWeight};
  font-style: normal;
  font-size: ${fontSize}rem;
  @media (max-width: ${Variables.query1000}) {
    font-size: ${fontSize - 0.35}rem;
  }
  @media (max-width: ${Variables.query800}) {
    font-size: ${fontSize - 0.55}rem;
  }
`;

export const addColors = (bgColor, txtColor) => css`
  background-color: ${bgColor};
  color: ${txtColor};
`;

export const applyBoxShadow = css`
  box-shadow: ${Variables.boxShadow};
  &:hover {
    box-shadow: ${Variables.boxShadowHover};
  }
  &:active {
    box-shadow: ${Variables.boxShadowActive};
  }
`;
