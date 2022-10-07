import React, { useState } from "react";
import { connect, css, styled, keyframes } from "frontity";

import * as Mixins from "../../../styles/Mixins";
import * as Variables from "../../../styles/Variables";

const Gallery = ({ galleryContent }) => {
  const galleryLength = galleryContent.length;
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const shiftItem = (direction) => {
    setActiveItemIndex((prevIndex) => {
      if (direction === "next") {
        if (prevIndex < galleryLength - 1) {
          return prevIndex + 1;
        } else {
          return 0;
        }
      }
      if (direction === "prev") {
        if (prevIndex > 0) {
          return prevIndex - 1;
        } else {
          return galleryLength - 1;
        }
      }
    });
  };
  return (
    <GalleryItems>
      {galleryContent.map((item, itemIndex) => {
        return (
          <Figure
            isActiveItem={itemIndex === activeItemIndex ? true : false}
            key={`gallery-item-${itemIndex + 1}`}
          >
            <ItemNumber>
              {itemIndex + 1} / {galleryLength}
            </ItemNumber>
            <Image src={item.img.src} alt={item.img.alt} />
            {item.caption && <Caption>{item.caption}</Caption>}
          </Figure>
        );
      })}
      {/* Next and Previous Buttons */}
      <PrevButton
        onClick={() => {
          shiftItem("prev");
        }}
      >
        &#10094;
      </PrevButton>
      <NextButton
        onClick={() => {
          shiftItem("next");
        }}
      >
        &#10095;
      </NextButton>
    </GalleryItems>
  );
};

export default connect(Gallery);

const fadeIn = keyframes`
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
`;

const GalleryItems = styled.article`
  max-width: 80rem;
  padding: 0 2rem;
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Figure = styled.figure`
  position: relative;
  display: none;
  ${(props) =>
    props.isActiveItem &&
    css`
      display: block;
    `}
`;

const ItemNumber = styled.div`
  ${Mixins.addColors(Variables.colorRed, Variables.colorGold)};
  border-bottom-right-radius: 1rem;
  border-top-left-radius: 1rem;
  font-size: 1.2rem;
  padding: 0.8rem 1.2rem;
  position: absolute;
  top: 0;
  z-index: 1;
`;

const Image = styled.img`
  animation: ${fadeIn} 0.2s linear;
  width: 100%;
  border-radius: 1rem;
`;

const Caption = styled.p`
  text-align: center;
  font-size: 2rem;
  animation: ${fadeIn} 0.2s linear;
  @media (max-width: ${Variables.queryMDSMSM}) {
    font-size: 1.5rem;
  }
`;

const buttonCSS = css`
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 1.6rem;
  color: ${Variables.colorRed};
  font-weight: bold;
  font-size: 1.8rem;
  transition: 0.3s ease;
  border-radius: 0 3px 3px 0;
  border: none;
  user-select: none;
`;

const PrevButton = styled.button`
  ${buttonCSS};
  left: 2rem;
  &:hover {
    background-color: ${Variables.colorBlackPureRGBA};
    color: ${Variables.colorGold};
  }
`;

const NextButton = styled.button`
  ${buttonCSS};
  right: 2rem;
  border-radius: 3px 0 0 3px;
  &:hover {
    background-color: ${Variables.colorBlackPureRGBA};
    color: ${Variables.colorGold};
  }
`;
