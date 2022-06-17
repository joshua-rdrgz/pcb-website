import { css } from 'frontity';
import * as Variables from './Variables'

export const liCleanUp = () => css`
  list-style: none;
  &:hover {
    cursor: pointer;
  }
`
export const aCleanUp = () => css`
  text-decoration: none;
  color: ${Variables.colorWhite}
`

export const addHeadingFont = (fontWeight, fontSize) => css`
  font-family: trade-gothic-next-compressed, sans-serif;
  font-weight: ${fontWeight};
  font-style: normal;
  font-size: ${fontSize}rem;
`

export const addColors = (bgColor, txtColor) => css`
  background-color: ${bgColor};
  color: ${txtColor}
`
