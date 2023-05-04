import { css } from "frontity";

// *
// GENERATE TEXT STYLES
// *
export const generateTextStyles = (fontFamily, fontSize, fontWeight) => css`
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  font-style: normal;
`;
