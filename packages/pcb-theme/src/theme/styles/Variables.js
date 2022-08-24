import { keyframes } from 'frontity';

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
export const colorGray1RGBA = 'rgba(80, 80, 80,0.5)'
export const colorGray2 = "#707070";
export const colorGrayDark = "#404040";
export const colorBlack = "#101010";
export const colorBlackPure = "#000";
export const colorBlackPureRGBA = 'rgba(0,0,0,0.7)';
export const colorRedBright1 = "#FF0000";
export const colorRedBright2 = "#CC0000";
export const colorRed = "#990000";
export const colorRedDeep1 = "#800000";
export const colorRedDeep2 = "#4D0000";
export const colorRedDeep2RGBA = "rgba(77,0,0,0.7)"
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
export const boxShadowActive = `0.3rem 0.6rem 1rem rgba(16, 16, 16, 0.3)`

// MEDIA QUERIES
export const queryXXLG = "84.375em"; // 1350px
export const queryXLG = "81.25em"; // 1300px
export const queryLGLG = '75em'; // 1200px
export const queryLGMD = '64.0625em'; // 1025px
export const queryLG = "62.5em"; // 1000px
export const queryMDLGLG = '57.8125em'; // 925px
export const queryMDLG = '54.6875em'; // 875px
export const queryMD = "50em"; // 800px
export const queryMDMD = '46.875em'; // 750px
export const queryMDSMMD = '43.75em'; // 700px
export const queryMDSM = '40.625em'; // 650px
export const queryMDSMSM = '37.5em'; // 600px
export const querySMMD = '35.125em'; // 550px
export const querySM = "30.625em"; // 490px
export const querySMSM = '28.125em'; // 450px
export const queryXSMLG = '25em'; // 400px
export const queryXSM = '24.5em'; // 392px
export const queryXXSM = '18.75em'; // 300px
