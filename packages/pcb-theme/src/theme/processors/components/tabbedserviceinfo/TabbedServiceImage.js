import React from "react";
import { connect, styled, css } from "frontity";

import * as Variables from "../../../styles/Variables";

// PPF Sprite Switch Statement
const producePPFMaterials = (activeImage) => {
  let imagePositionCSS; // css that obtains the correct position of the image on the grid
  let imageSrc; // a transparent file with the correct aspect ratio for the image
  let imageAlt; // the beginning portion of the alt tag given to the image.
  switch (activeImage) {
    case "0-0": // Reaction Partial Front
      imagePositionCSS = css`
        background-position: 0 36.363636%;
        background-size: 100%;
      `;
      imageAlt = "Reaction Partial Front Package";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACQAAAAPwAQMAAABectNQAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAATFJREFUeNrtwYEAAAAAw6D5U9/gBFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDHIsAAHd2DNiAAAAAElFTkSuQmCC";
      break;
    case "1-0": // Reaction Full Front
      imagePositionCSS = css`
        background-position: 0 18.181818%;
        background-size: 100%;
      `;
      imageAlt = "Reaction Full Front Package";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACQAAAAPwAQMAAABectNQAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAATFJREFUeNrtwYEAAAAAw6D5U9/gBFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDHIsAAHd2DNiAAAAAElFTkSuQmCC";
      break;
    case "2-0": // Reaction Full Front w/Ceramic
      imagePositionCSS = css`
        background-position: 0 27.272727%;
        background-size: 100%;
      `;
      imageAlt = "Reaction Full Front with Ceramic Coating Combo";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACQAAAAPwAQMAAABectNQAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAATFJREFUeNrtwYEAAAAAw6D5U9/gBFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDHIsAAHd2DNiAAAAAElFTkSuQmCC";
      break;
    case "3-0": // Reaction Full Car
      imagePositionCSS = css`
        background-position: 0 9.090909%;
        background-size: 100%;
      `;
      imageAlt = "Reaction Full Car Package";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACQAAAAPwAQMAAABectNQAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAATFJREFUeNrtwYEAAAAAw6D5U9/gBFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDHIsAAHd2DNiAAAAAElFTkSuQmCC";
      break;
    case "4-0": // Reaction Add-Ons
      imagePositionCSS = css`
        background-position: 0 0%;
        background-size: 100%;
      `;
      imageAlt = "Reaction Add-Ons Package, including A-Pillars & Partial Roof";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACQAAAAPwAQMAAABectNQAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAATFJREFUeNrtwYEAAAAAw6D5U9/gBFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDHIsAAHd2DNiAAAAAElFTkSuQmCC";
      break;
    case "5-0": // Reaction Wear and Tear
      imagePositionCSS = css`
        background-position: 0 45.454545%;
        background-size: 100%;
      `;
      imageAlt = "Reaction Wear and Tear Package";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACQAAAAPwAQMAAABectNQAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAATFJREFUeNrtwYEAAAAAw6D5U9/gBFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDHIsAAHd2DNiAAAAAElFTkSuQmCC";
      break;
    case "0-1": // Ultra Partial Front
      imagePositionCSS = css`
        background-position: 0 90.909091%;
        background-size: 100%;
      `;
      imageAlt = "Ultra Partial Front Package";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACQAAAAPwAQMAAABectNQAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAATFJREFUeNrtwYEAAAAAw6D5U9/gBFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDHIsAAHd2DNiAAAAAElFTkSuQmCC";
      break;
    case "1-1": // Ultra Full Front
      imagePositionCSS = css`
        background-position: 0 72.727273%;
        background-size: 100%;
      `;
      imageAlt = "Ultra Full Front Package";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACQAAAAPwAQMAAABectNQAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAATFJREFUeNrtwYEAAAAAw6D5U9/gBFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDHIsAAHd2DNiAAAAAElFTkSuQmCC";
      break;
    case "2-1": // Ultra Full Front w/Ceramic
      imagePositionCSS = css`
        background-position: 0 81.818182%;
        background-size: 100%;
      `;
      imageAlt = "Ultra Full Front with Ceramic Coating Combo";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACQAAAAPwAQMAAABectNQAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAATFJREFUeNrtwYEAAAAAw6D5U9/gBFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDHIsAAHd2DNiAAAAAElFTkSuQmCC";
      break;
    case "3-1": // Ultra Full Car
      imagePositionCSS = css`
        background-position: 0 63.636364%;
        background-size: 100%;
      `;
      imageAlt = "Ultra Full Car Package";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACQAAAAPwAQMAAABectNQAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAATFJREFUeNrtwYEAAAAAw6D5U9/gBFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDHIsAAHd2DNiAAAAAElFTkSuQmCC";
      break;
    case "4-1": // Ultra Add-Ons
      imagePositionCSS = css`
        background-position: 0 54.545455%;
        background-size: 100%;
      `;
      imageAlt = "Ultra Add-Ons Package, including A-Pillars & Partial Roof";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACQAAAAPwAQMAAABectNQAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAATFJREFUeNrtwYEAAAAAw6D5U9/gBFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDHIsAAHd2DNiAAAAAElFTkSuQmCC";
      break;
    case "5-1": // Ultra Wear and Tear
      imagePositionCSS = css`
        background-position: 0 100%;
        background-size: 100%;
      `;
      imageAlt = "Ultra Wear and Tear Package";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACQAAAAPwAQMAAABectNQAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAATFJREFUeNrtwYEAAAAAw6D5U9/gBFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDHIsAAHd2DNiAAAAAElFTkSuQmCC";
      break;
  }
  return { css: imagePositionCSS, src: imageSrc, alt: imageAlt };
};

// WT Sprite Switch Statement
const produceWTMaterials = (activeImage) => {
  let imagePositionCSS; // css that obtains the correct position of the image on the grid
  let imageSrc; // a transparent file with the correct aspect ratio for the image
  let imageAlt; // the beginning portion of the alt tag given to the image.
  switch (activeImage) {
    case "0-0": // Tesla Main Windows
      imagePositionCSS = css`
        background-position: 0 90.537472%;
        background-size: 284.444444%;
      `;
      imageAlt = "Main Windows package for Tesla vehicles.";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4QAAAHgAQMAAADHejEdAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAExJREFUeNrtwYEAAAAAw6D5U1/gCFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwD1cAAAdb6R8sAAAAASUVORK5CYII=";
      break;
    case "1-0": // Tesla Windshield
      imagePositionCSS = css`
        background-position: 0 100%;
        background-size: 284.444444%;
      `;
      imageAlt = "Main Windshield package for Tesla vehicles.";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4QAAAHgAQMAAADHejEdAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAExJREFUeNrtwYEAAAAAw6D5U1/gCFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwD1cAAAdb6R8sAAAAASUVORK5CYII=";
      break;
    case "2-0": // Tesla Visor Strip
      imagePositionCSS = css`
        background-position: 0 96.845824%;
        background-size: 284.444444%;
      `;
      imageAlt = "Visor Strip package for Tesla vehicles.";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4QAAAHgAQMAAADHejEdAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAExJREFUeNrtwYEAAAAAw6D5U1/gCFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwD1cAAAdb6R8sAAAAASUVORK5CYII=";
      break;
    case "3-0": // Tesla Sunroof
      imagePositionCSS = css`
        background-position: 0 93.691648%;
        background-size: 284.444444%;
      `;
      imageAlt = "Sunroof package for Tesla vehicles.";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4QAAAHgAQMAAADHejEdAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAExJREFUeNrtwYEAAAAAw6D5U1/gCFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwD1cAAAdb6R8sAAAAASUVORK5CYII=";
      break;
    case "0-1": // Sedan Main Windows
      imagePositionCSS = css`
        background-position: 0 42.93918%;
        background-size: 111.111111%;
      `;
      imageAlt = "Main Windows package for sedans.";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACQAAAAPwAQMAAABectNQAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAATFJREFUeNrtwYEAAAAAw6D5U9/gBFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDHIsAAHd2DNiAAAAAElFTkSuQmCC";
      break;
    case "1-1": // Sedan Windshield
      imagePositionCSS = css`
        background-position: 0 56.356043%;
        background-size: 111.111111%;
      `;
      imageAlt = "Main Windshield package for sedans.";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACQAAAAPwAQMAAABectNQAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAATFJREFUeNrtwYEAAAAAw6D5U9/gBFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDHIsAAHd2DNiAAAAAElFTkSuQmCC";
      break;
    case "2-1": // Sedan Visor Strip
      imagePositionCSS = css`
        background-position: 0 49.647612%;
        background-size: 111.111111%;
      `;
      imageAlt = "Visor Strip package for sedans.";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACQAAAAPwAQMAAABectNQAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAATFJREFUeNrtwYEAAAAAw6D5U9/gBFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDHIsAAHd2DNiAAAAAElFTkSuQmCC";
      break;
    case "3-1": // Sedan Sunroof
      imagePositionCSS = css`
        background-position: 0 0%;
        background-size: 100%;
      `;
      imageAlt = "Sunroof package for sedans.";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACgAAAAUQAQMAAACyBJvpAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAapJREFUeNrtwTEBAAAAwqD1T20MH6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgZZagABuO7W+QAAAABJRU5ErkJggg==";
      break;
    case "0-2": // SUV Main Windows
      imagePositionCSS = css`
        background-position: 0 8.752328%;
        background-size: 100%;
      `;
      imageAlt = "Main Windows package for SUVs.";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACgAAAAUQAQMAAACyBJvpAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAapJREFUeNrtwTEBAAAAwqD1T20MH6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgZZagABuO7W+QAAAABJRU5ErkJggg==";
      break;
    case "1-2": // SUV Windshield
      imagePositionCSS = css`
        background-position: 0 35.009311%;
        background-size: 100%;
      `;
      imageAlt = "Main Windshield package for SUVs.";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACgAAAAUQAQMAAACyBJvpAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAapJREFUeNrtwTEBAAAAwqD1T20MH6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgZZagABuO7W+QAAAABJRU5ErkJggg==";
      break;
    case "2-2": // SUV Visor Strip
      imagePositionCSS = css`
        background-position: 0 26.256983%;
        background-size: 100%;
      `;
      imageAlt = "Visor Strip package for SUVs.";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACgAAAAUQAQMAAACyBJvpAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAapJREFUeNrtwTEBAAAAwqD1T20MH6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgZZagABuO7W+QAAAABJRU5ErkJggg==";
      break;
    case "3-2": // SUV Sunroof
      imagePositionCSS = css`
        background-position: 0 17.504655%;
        background-size: 100%;
      `;
      imageAlt = "Sunroof package for SUVs.";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACgAAAAUQAQMAAACyBJvpAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAapJREFUeNrtwTEBAAAAwqD1T20MH6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgZZagABuO7W+QAAAABJRU5ErkJggg==";
      break;
    case "0-3": // Truck Main Windows
      imagePositionCSS = css`
        background-position: 0 63.662714%;
        background-size: 133.333333%;
      `;
      imageAlt = "Main Windows package for trucks.";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAASAAQMAAAAkhMIYAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAASRJREFUeNrtwYEAAAAAw6D5U1/gCFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwDPLwAAZE7P2YAAAAASUVORK5CYII=";
      break;
    case "1-3": // Truck Windshield
      imagePositionCSS = css`
        background-position: 0 86.824769%;
        background-size: 133.333333%;
      `;
      imageAlt = "Main Windshield package for trucks.";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAASAAQMAAAAkhMIYAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAASRJREFUeNrtwYEAAAAAw6D5U1/gCFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwDPLwAAZE7P2YAAAAASUVORK5CYII=";
      break;
    case "2-3": // Truck Visor Strip
      imagePositionCSS = css`
        background-position: 0 79.104084%;
        background-size: 133.333333%;
      `;
      imageAlt = "Visor Strip package for trucks.";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAASAAQMAAAAkhMIYAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAASRJREFUeNrtwYEAAAAAw6D5U1/gCFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwDPLwAAZE7P2YAAAAASUVORK5CYII=";
      break;
    case "3-3": // Truck Sunroof
      imagePositionCSS = css`
        background-position: 0 71.383399%;
        background-size: 133.333333%;
      `;
      imageAlt = "Sunroof package for trucks.";
      imageSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAASAAQMAAAAkhMIYAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAASRJREFUeNrtwYEAAAAAw6D5U1/gCFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwDPLwAAZE7P2YAAAAASUVORK5CYII=";
      break;
  }
  return { css: imagePositionCSS, src: imageSrc, alt: imageAlt };
};

const TabbedServiceImage = ({
  state,
  isWindowTint,
}) => {
  const { data: assetData } = state.source.get("media");
  const assets = Object.values(assetData);
  const ppfSprites = assets.find((asset) => asset.slug === "ppf-sprites");
  const wtSprites = assets.find((asset) => asset.slug === "wt-sprites");

  return (
    <Figure>
      {state.theme.tabbedServiceInfo.typeButtons.map((isActive, typeIndex) => {
        if (isActive) {
          return state.theme.tabbedServiceInfo.locationButtons.map(
            (isActive, locationIndex) => {
              if (isActive) {
                console.log(`${locationIndex}-${typeIndex}`);
                return (
                  <Img
                    loading="lazy"
                    key={`service-image-${typeIndex}-${locationIndex}`}
                    src={
                      isWindowTint
                        ? produceWTMaterials(`${locationIndex}-${typeIndex}`)
                            .src
                        : producePPFMaterials(`${locationIndex}-${typeIndex}`)
                            .src
                    }
                    alt={
                      isWindowTint
                        ? `${
                            produceWTMaterials(`${locationIndex}-${typeIndex}`)
                              .alt
                          }  Contact Performance Clear Bra today!`
                        : `${
                            producePPFMaterials(`${locationIndex}-${typeIndex}`)
                              .alt
                          }, showing what portion of your vehicle it covers.  Contact Performance Clear Bra for a quote today!`
                    }
                    imageLink={
                      isWindowTint
                        ? wtSprites.guid.rendered
                        : ppfSprites.guid.rendered
                    }
                    activeImage={
                      isWindowTint
                        ? produceWTMaterials(`${locationIndex}-${typeIndex}`)
                            .css
                        : producePPFMaterials(`${locationIndex}-${typeIndex}`)
                            .css
                    }
                  />
                );
              }
            }
          );
        }
      })}
    </Figure>
  );
};

const Figure = styled.figure`
  grid-area: img;
  position: relative;
`;
const Img = styled.img`
  ${(props) => css`
    ${props.activeImage}
    background-image: url(${props.imageLink});
  `};
  max-width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${Variables.fadeIn} 1s ease;
  @media (max-width: ${Variables.queryLG}) {
    position: static;
    top: 0;
    left: 0;
    transform: none;
  }
`;

export default connect(TabbedServiceImage);
