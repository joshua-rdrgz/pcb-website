import { css } from "frontity";
import Link from "@frontity/components/link";

import * as Variables from "../Variables";
import * as Mixins from "../Mixins";

const LinkStyles = (type, fontSize) => {
  const remFontSize =
    fontSize &&
    (fontSize.split(";")[0].split(":")[1].split("p")[0] / 10).toString();
  if (type === "primary") {
    return css`
      display: inline-block;
      ${Mixins.aCleanUp(Variables.colorWhite)};
      background-color: ${Variables.colorGold};
      padding: 0.25rem 3.5rem;
      margin: 3rem 0;
      border-radius: 0.5rem;
      ${Mixins.applyBoxShadow};
      transition: all 0.1s;
      ${Mixins.addHeadingFont(400, remFontSize ? remFontSize : "3")};
      @media (max-width: ${Variables.query550}) {
        font-size: 3rem;
        padding: 0 2rem;
      }
      &:hover {
        background-color: ${Variables.colorRed};
      }
    `;
  }
  if (type === "secondary-herobox") {
    return css`
      display: inline-block;
      ${Mixins.aCleanUp(Variables.colorWhite)};
      background-color: transparent;
      border: 1px solid ${Variables.colorGold};
      padding: 0.25rem 3.5rem;
      margin: 3rem 0;
      border-radius: 0.5rem;
      ${Mixins.applyBoxShadow};
      transition: all 0.1s;
      ${Mixins.addHeadingFont(400, remFontSize ? remFontSize : "3")};
      @media (max-width: ${Variables.query550}) {
        font-size: 3rem;
        padding: 0 2rem;
      }
      @media (max-width: ${Variables.query490}) {
        padding: 0;
        margin: 0;
        margin-top: 2rem;
      }
      &:hover {
        background-color: ${Variables.colorRed};
      }
    `;
  }
  if (type === "secondary") {
    return css`
      ${Mixins.aCleanUp(Variables.colorGold)};
      ${Mixins.addHeadingFont(400, remFontSize ? remFontSize : "2.75")};
      display: inline-block;
      margin-bottom: 1rem;
      text-decoration: underline;
      &:hover {
        color: ${Variables.colorRedBright1};
      }
    `;
  }
};

export default LinkStyles;
