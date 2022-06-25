import { css } from "frontity";
import * as Variables from "./Variables";
import { MobileToggle, Nav } from "../components/Header";

export const liCleanUp = () => css`
  list-style: none;
  &:hover {
    cursor: pointer;
  }
`;
export const aCleanUp = (color) => css`
  text-decoration: none;
  color: ${color};
  &:link,
  &:visited {
    color: ${color};
  }
  @media (max-width: ${Variables.queryMD}) {
    opacity: 0;
    transition: opacity 150ms ease-in-out;
    ${MobileToggle}:checked ~ ${Nav} & {
      opacity: 1;
      transition: opacity 250ms ease-in-out 250ms;
    }
  }
`;

export const addHeadingFont = (fontWeight, fontSize) => css`
  font-family: trade-gothic-next-compressed, sans-serif;
  font-weight: ${fontWeight};
  font-style: normal;
  font-size: ${fontSize}rem;
  @media (max-width: ${Variables.queryLG}) {
    font-size: ${fontSize - 0.35}rem;
  }
`;

export const addColors = (bgColor, txtColor) => css`
  background-color: ${bgColor};
  color: ${txtColor};
`;
