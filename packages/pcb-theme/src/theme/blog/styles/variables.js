import { generateTextStyles } from "./mixins";

// *
// COLOR PALETTE
// *

// PRIMARY === REDS
export const colorPrimary900 = "hsl(25, 90%, 15%)";
export const colorPrimary800 = "hsl(15, 90%, 20%)";
export const colorPrimary700 = "hsl(0, 70%, 30%)";
export const colorPrimary600 = "hsl(0, 70%, 40%)";
export const colorPrimary500 = "hsl(0, 70%, 50%)";
export const colorPrimary400 = "hsl(0, 70%, 60%)";
export const colorPrimary300 = "hsl(0, 100%, 70%)";
export const colorPrimary200 = "hsl(0, 100%, 80%)";
export const colorPrimary100 = "hsl(0, 100%, 90%)";

// NEUTRAL === GRAYS
export const colorPureBlack = "hsl(0, 0%, 0%)";
export const colorNeutral900 = "hsl(0, 10%, 15%)";
export const colorNeutral800 = "hsl(0, 5%, 20%)";
export const colorNeutral700 = "hsl(0, 2%, 30%)";
export const colorNeutral600 = "hsl(0, 1%, 45%)";
export const colorNeutral500 = "hsl(0, 0%, 60%)";
export const colorNeutral400 = "hsl(0, 2%, 73%)";
export const colorNeutral300 = "hsl(0, 5%, 85%)";
export const colorNeutral200 = "hsl(0, 20%, 95%)";
export const colorNeutral100 = "hsl(0, 30%, 99%)";
export const colorPureWhite = "hsl(0, 0%, 100%)";

// ACCENT === GOLDS
export const colorAccent900 = "hsl(30, 100%, 15%)";
export const colorAccent800 = "hsl(30, 85%, 25%)";
export const colorAccent700 = "hsl(35, 75%, 30%)";
export const colorAccent600 = "hsl(35, 65%, 40%)";
export const colorAccent500 = "hsl(35, 60%, 50%)";
export const colorAccent400 = "hsl(40, 75%, 60%)";
export const colorAccent300 = "hsl(50, 90%, 75%)";
export const colorAccent200 = "hsl(50, 90%, 90%)";
export const colorAccent100 = "hsl(45, 100%, 99%)";

// *
// TEXT STYLES
// *

// FONT FAMILIES
const bodyFontFamily = "neusa-next-std, sans-serif";
const headingFontFamily = "trade-gothic-next-compressed, sans-serif";

// REGULAR (1rem === 10px)
export const textBody12 = generateTextStyles(bodyFontFamily, "1.2rem", 400);
export const textBody14 = generateTextStyles(bodyFontFamily, "1.4rem", 400);
export const textBody16 = generateTextStyles(bodyFontFamily, "1.6rem", 400);
export const textBody18 = generateTextStyles(bodyFontFamily, "1.8rem", 400);
export const textBody20 = generateTextStyles(bodyFontFamily, "2.0rem", 400);
export const textBody24 = generateTextStyles(bodyFontFamily, "2.4rem", 400);
export const textBody30 = generateTextStyles(bodyFontFamily, "3.0px", 400);
export const textHeading6 = generateTextStyles(
  headingFontFamily,
  "2.4rem",
  400
);
export const textHeading5 = generateTextStyles(
  headingFontFamily,
  "3.0rem",
  400
);
export const textHeading4 = generateTextStyles(
  headingFontFamily,
  "3.6rem",
  400
);
export const textHeading3 = generateTextStyles(
  headingFontFamily,
  "4.8rem",
  400
);
export const textHeading2 = generateTextStyles(
  headingFontFamily,
  "6.0rem",
  400
);
export const textHeading1 = generateTextStyles(
  headingFontFamily,
  "7.2rem",
  400
);
// BOLD
export const textBody12Bold = generateTextStyles(bodyFontFamily, "1.2rem", 700);
export const textBody14Bold = generateTextStyles(bodyFontFamily, "1.4rem", 700);
export const textBody16Bold = generateTextStyles(bodyFontFamily, "1.6rem", 700);
export const textBody18Bold = generateTextStyles(bodyFontFamily, "1.8rem", 700);
export const textBody20Bold = generateTextStyles(bodyFontFamily, "2.0rem", 700);
export const textBody24Bold = generateTextStyles(bodyFontFamily, "2.4rem", 700);
export const textBody30Bold = generateTextStyles(bodyFontFamily, "3.0rem", 700);
export const textHeading6Bold = generateTextStyles(
  headingFontFamily,
  "2.4rem",
  700
);
export const textHeading5Bold = generateTextStyles(
  headingFontFamily,
  "3.0rem",
  700
);
export const textHeading4Bold = generateTextStyles(
  headingFontFamily,
  "3.6rem",
  700
);
export const textHeading3Bold = generateTextStyles(
  headingFontFamily,
  "4.8rem",
  700
);
export const textHeading2Bold = generateTextStyles(
  headingFontFamily,
  "6.0rem",
  700
);
export const textHeading1Bold = generateTextStyles(
  headingFontFamily,
  "7.2rem",
  700
);

// *
// SPACING PARAMETERS
// *
export const spacing2 = ".2rem";
export const spacing4 = ".4rem";
export const spacing8 = ".8rem";
export const spacing12 = "1.2rem";
export const spacing16 = "1.6rem";
export const spacing20 = "2.0rem";
export const spacing24 = "2.4rem";
export const spacing28 = "2.8rem";
export const spacing32 = "3.2rem";
export const spacing40 = "4.0rem";
export const spacing48 = "4.8rem";
export const spacing60 = "6.0rem";
