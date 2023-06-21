import { css } from "frontity";
import * as variables from "./variables";

const generalPostStyles = css`
  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: trade-gothic-next-compressed, sans-serif;
    font-style: normal;
    color: ${variables.colorPureBlack};
  }
  & h2 {
    ${variables.textHeading6Bold};
    @media (min-width: ${variables.breakpoint600}) {
      ${variables.textHeading4Bold};
    }
    @media (min-width: ${variables.breakpoint950}) {
      ${variables.textHeading3Bold};
    }
  }
  & h3 {
    ${variables.textBody14Bold};
    @media (min-width: ${variables.breakpoint600}) {
      ${variables.textHeading6Bold};
    }
    @media (min-width: ${variables.breakpoint950}) {
      ${variables.textHeading5Bold};
    }
  }
  & section {
    display: flex;
    flex-direction: column;
    gap: ${variables.spacing24};
    padding: ${variables.spacing16} ${variables.spacing12};
    @media (min-width: ${variables.breakpoint1300}) {
      padding: ${variables.spacing20} ${variables.spacing32};
    }
  }
  & figure {
    max-width: 100%;
    @media (min-width: ${variables.breakpoint600}) {
      max-width: 75%;
    }
    @media (min-width: ${variables.breakpoint950}) {
      max-width: 60%;
    }
    @media (min-width: ${variables.breakpoint1300}) {
      max-width: 50%;
    }
  }
  & img {
    max-width: 100%;
    @media (min-width: ${variables.breakpoint600}) {
      max-width: 75%;
    }
    @media (min-width: ${variables.breakpoint950}) {
      max-width: 60%;
    }
    @media (min-width: ${variables.breakpoint1300}) {
      max-width: 50%;
    }
    border-radius: ${variables.spacing2};
    border: 1px solid ${variables.colorNeutral900};
  }
  & figcaption {
    text-align: center;
    ${variables.textBody12};
    @media (min-width: ${variables.breakpoint600}) {
      ${variables.textBody14};
    }
    @media (min-width: ${variables.breakpoint950}) {
      ${variables.textBody16};
    }
  }
  & p,
  & a {
    ${variables.textBody12};
    color: ${variables.colorNeutral900};
    @media (min-width: ${variables.breakpoint600}) {
      ${variables.textBody18};
    }
    @media (min-width: ${variables.breakpoint950}) {
      ${variables.textBody20};
    }
  }
  & a {
    color: ${variables.colorPrimary700};
  }
  & ul,
  & ol {
    padding: ${variables.spacing4} ${variables.spacing16};
    ${variables.textBody12};
    @media (min-width: ${variables.breakpoint600}) {
      padding: ${variables.spacing4} ${variables.spacing24};
      ${variables.textBody18};
    }
    @media (min-width: ${variables.breakpoint950}) {
      padding: ${variables.spacing8} ${variables.spacing28};
      ${variables.textBody20};
    }
    @media (min-width: ${variables.breakpoint1300}) {
      padding: ${variables.spacing8} ${variables.spacing40};
    }
  }
  & blockquote {
    padding-left: ${variables.spacing12};
    margin: ${variables.spacing4} ${variables.spacing16};
    border-left: 3px solid ${variables.colorNeutral900};
    & p {
      ${variables.textBody16Bold};
    }
    @media (min-width: ${variables.breakpoint600}) {
      margin: ${variables.spacing8} ${variables.spacing20};
      & p {
        ${variables.textBody24Bold};
      }
      & cite {
        ${variables.textBody16};
        font-style: italic;
      }
    }
    @media (min-width: ${variables.breakpoint950}) {
      margin: ${variables.spacing12} ${variables.spacing28};
      & p {
        ${variables.textBody30Bold};
      }
      & cite {
        ${variables.textBody18};
        font-style: italic;
      }
    }
  }
`;

export default generalPostStyles;
