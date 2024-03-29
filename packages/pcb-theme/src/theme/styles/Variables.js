import { keyframes } from "frontity";

// ANIMATIONS
export const fadeIn = keyframes`
  0% {
    opacity: 0;
  } 
  100% {
    opacity: 1;
  }
`;

// COLORS
export const colorWhitePure = "#FFF";
export const colorWhite = "#EFEFEF";
export const colorGrayLight1 = "#DFDFDF";
export const colorGrayLight2 = "#CFCFCF";
export const colorGrayLight3 = "#BFBFBF";
export const colorGray1 = "#808080";
export const colorGray1RGBA = "rgba(110, 110, 110,0.5)";
export const colorGray2 = "#707070";
export const colorGrayDark = "#404040";
export const colorBlack = "#101010";
export const colorBlackPure = "#000";
export const colorBlackPureRGBA = "rgba(0,0,0,0.7)";
export const colorRedBright1 = "#FF0000";
export const colorRedBright2 = "#CC0000";
export const colorRed = "#990000";
export const colorRedDeep1 = "#800000";
export const colorRedDeep2 = "#4D0000";
export const colorRedDeep2RGBA = "rgba(77,0,0,0.7)";
export const colorRedDeep3 = "#3D0000";
export const colorGold = "#FCC004";
export const colorGoldDeep1 = "#CA9802";
export const colorGoldDeep2 = "#654C01";

// BORDERS
export const headerBorder = `1px solid ${colorWhite}`;
export const footerBorder = `0.5px solid ${colorGray1}`;

// BOX-SHADOW
export const textShadow = `0.3rem 0.5rem 0.5rem rgba(16,16,16,0.1)`;
export const boxShadow = `0 0.5rem 1rem rgba(16, 16, 16, 0.3)`;
export const boxShadowHover = `0.3rem 0.7rem 1rem rgba(16, 16, 16, 0.5)`;
export const boxShadowActive = `0.3rem 0.6rem 1rem rgba(16, 16, 16, 0.3)`;

// MEDIA QUERIES
export const query1450 = "90.625em"; // 1450px
export const query1350 = "84.375em"; // 1350px
export const query1300 = "81.25em"; // 1300px
export const query1250 = "78.125em"; // 1250px
export const query1200 = "75em"; // 1200px
export const query1025 = "64.0625em"; // 1025px
export const query1000 = "62.5em"; // 1000px
export const query925 = "57.8125em"; // 925px
export const query875 = "54.6875em"; // 875px
export const query800 = "50em"; // 800px
export const query750 = "46.875em"; // 750px
export const query700 = "43.75em"; // 700px
export const query650 = "40.625em"; // 650px
export const query600 = "37.5em"; // 600px
export const query550 = "35.125em"; // 550px
export const query490 = "30.625em"; // 490px
export const query450 = "28.125em"; // 450px
export const query420 = "26.25em"; // 420px;
export const query400 = "25em"; // 400px
export const query392 = "24.5em"; // 392px
export const query300 = "18.75em"; // 300px
