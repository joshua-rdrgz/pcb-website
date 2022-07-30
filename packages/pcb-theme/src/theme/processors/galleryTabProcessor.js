import React, { useState, useEffect } from "react";
import { styled, css, keyframes } from "frontity";
import Link from "@frontity/components/link";

import * as Mixins from "../styles/Mixins";
import * as Variables from "../styles/Variables";
import LinkStyles from "../styles/componentStyles/LinkStyles";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

const GalleryTab = ({
  state,
  sectionHeader,
  galleryContent,
  buttonContent,
  buttonFontSize,
  buttonLink,
}) => {
  if (!galleryContent || galleryContent.length <= 0) return;

  const galleryContentPadded = [
    galleryContent[galleryContent.length - 4],
    galleryContent[galleryContent.length - 3],
    galleryContent[galleryContent.length - 2],
    galleryContent[galleryContent.length - 1],
    ...galleryContent,
    galleryContent[0],
    galleryContent[1],
    galleryContent[2],
    galleryContent[3],
  ];
  galleryContent.forEach((img, i) => {
    img.id = `gallery-main-img-${i + 1}`;
  });
  let [current, setCurrent] = useState(state.theme.gallery.galleryPos);

  useEffect(() => {
    document.getElementById(
      "gallery-small-container"
    ).style.transform = `translateX(${-10 * current}rem)`;
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") setGalleryPosDown();
      if (e.key === "ArrowRight") setGalleryPosUp();
    });
  }, []);

  const setGalleryPosDown = () => {
    setCurrent(
      (current = current === 4 ? galleryContent.length + 3 : current - 1)
    );
    document.getElementById(
      "gallery-small-container"
    ).style.transform = `translateX(${-10 * current}rem)`;
  };
  const setGalleryPosUp = () => {
    setCurrent(
      (current = current === galleryContent.length + 3 ? 4 : current + 1)
    );
    document.getElementById(
      "gallery-small-container"
    ).style.transform = `translateX(-${10 * current}rem)`;
  };

  const imageSwitch = (i) => {
    if (i > 3 && i < galleryContentPadded.length - 4) {
      setCurrent(i);
      document.getElementById(
        "gallery-small-container"
      ).style.transform = `translateX(-${10 * i}rem)`;
      console.log(
        document.getElementById("gallery-small-container").style.transform
      );
      return;
    }

    switch (i) {
      case 0:
        setCurrent(galleryContentPadded.length - 8);
        document.getElementById(
          "gallery-small-container"
        ).style.transform = `translateX(-${10 * (galleryContentPadded.length - 8)}rem)`;
        break;
      case 1:
        setCurrent(galleryContentPadded.length - 7);
        document.getElementById(
          "gallery-small-container"
        ).style.transform = `translateX(-${10 * (galleryContentPadded.length - 7)}rem)`;
        break;
      case 2:
        setCurrent(galleryContentPadded.length - 6);
        document.getElementById(
          "gallery-small-container"
        ).style.transform = `translateX(-${10 * (galleryContentPadded.length - 6)}rem)`;
        break;
      case 3:
        setCurrent(galleryContentPadded.length - 5);
        document.getElementById(
          "gallery-small-container"
        ).style.transform = `translateX(-${10 * (galleryContentPadded.length - 5)}rem)`;
        break;
      case (galleryContentPadded.length - 4):
        setCurrent(4);
        document.getElementById(
          "gallery-small-container"
        ).style.transform = `translateX(-${10 * (4)}rem)`;
        break;
      case (galleryContentPadded.length - 3):
        setCurrent(5);
        document.getElementById(
          "gallery-small-container"
        ).style.transform = `translateX(-${10 * (5)}rem)`;
        break;
      case (galleryContentPadded.length - 2):
        setCurrent(6);
        document.getElementById(
          "gallery-small-container"
        ).style.transform = `translateX(-${10 * (6)}rem)`;
        break;
      case (galleryContentPadded.length - 1):
        setCurrent(7);
        document.getElementById(
          "gallery-small-container"
        ).style.transform = `translateX(-${10 * (7)}rem)`;
        break;
    }
  };

  const galleryMainImg = [
    galleryContentPadded.find(
      (img) => img.id === `gallery-main-img-${current - 3}`
    ),
  ];

  return (
    <Section>
      <SectionHeader>{sectionHeader}</SectionHeader>
      <Carousel>
        <LeftArrow onClick={setGalleryPosDown} />
        <RightArrow onClick={setGalleryPosUp} />
        <CarouselWrapperBig>
          <CarouselBig>
            {galleryMainImg.map((img) => {
              return (
                <CarouselImgBig
                  src={img.src}
                  alt={img.alt}
                  key={img.id}
                  id={img.id}
                />
              );
            })}
          </CarouselBig>
        </CarouselWrapperBig>
        <CarouselWrapperSmall>
          <Container id="gallery-small-container">
            {galleryContentPadded.map((img, i) => {
              return (
                <CarouselSmall
                  key={`gallery-small-img-${i}`}
                  active={current === i ? "active" : null}
                  onClick={() => imageSwitch(i)}
                >
                  <CarouselImgSmall
                    src={img.src}
                    alt={img.alt}
                    srcSet={img.srcset}
                  />
                </CarouselSmall>
              );
            })}
          </Container>
        </CarouselWrapperSmall>
      </Carousel>
      <Button type="secondary" link={buttonLink} fontSize={buttonFontSize}>
        {buttonContent}
      </Button>
    </Section>
  );
};

const Section = styled.section`
  ${Mixins.addColors(Variables.colorBlack, Variables.colorWhite)};
  position: relative;
  display: flex;
  flex-direction: column;
`;

const SectionHeader = styled.h3`
  text-align: center;
  padding: 1.5rem 0;
  ${Mixins.addHeadingFont(700, 3.5)};
  text-shadow: ${Variables.textShadow};
`;

const Carousel = styled.article`
  position: relative;
  height: 65vh;
  @media (max-width: ${Variables.queryLG}) {
    height: 60vh;
  }
  @media (max-width: ${Variables.queryMDLGLG}) {
    height: 57vh;
  }
  @media (max-width: ${Variables.queryMDLG}) {
    height: 53vh;
  }
  @media (max-width: ${Variables.queryMD}) {
    height: 50vh;
  }
  @media (max-width: ${Variables.queryMDMD}) {
    height: 47vh;
  }
  @media (max-width: ${Variables.queryMDSMMD}) {
    height: 44vh;
  }
  @media (max-width: ${Variables.querySMMD}) {
    height: 42vh;
  }
  @media (max-width: ${Variables.querySM}) {
    height: 40vh;
  }
  @media (max-width: ${Variables.querySMSM}) {
    height: 36vh;
  }
  @media (max-width: ${Variables.queryXSM}) {
    height: 33vh;
  }
`;

const LeftArrow = styled(HiArrowSmLeft)`
  font-size: 6rem;
  position: absolute;
  top: 45%;
  left: 3rem;
  color: ${Variables.colorRed};
  cursor: pointer;
  z-index: 2;
  @media (max-width: ${Variables.queryMDSMSM}) {
    left: 12rem;
    top: 70%;
  }
  @media (max-width: ${Variables.querySMMD}) {
    left: 12rem;
    top: 68%;
  }
  @media (max-width: ${Variables.querySM}) {
    left: 9rem;
    top: 65%;
  }
  @media (max-width: ${Variables.queryXSM}) {
    top: 60%;
  }
`;

const RightArrow = styled(HiArrowSmRight)`
  font-size: 6rem;
  position: absolute;
  top: 45%;
  right: 3rem;
  color: ${Variables.colorRed};
  cursor: pointer;
  z-index: 2;
  @media (max-width: ${Variables.queryMDSMSM}) {
    right: 12rem;
    top: 70%;
  }
  @media (max-width: ${Variables.querySMMD}) {
    right: 12rem;
    top: 68%;
  }
  @media (max-width: ${Variables.querySM}) {
    right: 9rem;
    top: 65%;
  }
  @media (max-width: ${Variables.queryXSM}) {
    top: 60%;
  }
`;

const CarouselWrapperBig = styled.div`
  padding: 0.5rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  @media (min-width: ${Variables.queryLGMD}) {
    height: 52.5rem;
    width: 69.7rem;
  }
`;

const CarouselBig = styled.figure`
  width: 100%;
  height: 100%;
`;

const fadeIn = keyframes`
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const CarouselImgBig = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  box-shadow: ${Variables.boxShadow};
  background-size: cover;
  animation: ${fadeIn} 0.4s linear;
`;

const CarouselWrapperSmall = styled.div`
  padding: 0.5rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 70%;
  height: 7rem;
  margin-left: -35%;
  overflow: hidden;
  @media (min-width: ${Variables.queryLGMD}) {
    width: 69.7rem;
    margin-left: auto;
    transform: translateX(-50%);
  }
`;

const Container = styled.div`
  display: flex;
  position: absolute;
  left: 43%;
`;

const CarouselSmall = styled.figure`
  display: flex;
  opacity: 0.5;
  transform: scale(0.9);
  ${(props) =>
    props.active &&
    css`
      transform: scale(1.05);
      opacity: 1;
      left: 0;
      transition: all 0.5s;
    `};
`;

const CarouselImgSmall = styled.img`
  width: 10rem;
  height: 6rem;
  border-radius: 0.5rem;
  box-shadow: ${Variables.boxShadow};
  cursor: pointer;
  @media (max-width: ${Variables.queryLG}) {
    width: 9.75rem;
  }
  @media (max-width: ${Variables.queryMDSMMD}) {
    width: 9.5rem;
  }
  @media (max-width: ${Variables.querySM}) {
    width: 9.25rem;
  }
`;

const Button = styled(Link)`
  ${(props) => LinkStyles(props.type, props.fontSize)};
  margin: 1.5rem auto;
`;

const galleryTabProcessor = {
  name: "Gallery Tab",
  priority: 5,
  test: ({ node }) => {
    return (
      node?.props?.className?.includes("wp-block-group") &&
      node?.children[0]?.children[1]?.props?.className?.includes(
        "wp-block-gallery"
      )
    );
  },
  processor: ({ node, state }) => {
    const loggedNode = node?.children[0]?.children;

    // section header, always will be first
    const sectionHeader = loggedNode[0]?.children[0]?.content;

    // Gallery Content
    const galleryWrapper = loggedNode[1].children;
    const galleryContent = Object.values(galleryWrapper).map(
      (img) => img.children[0].props
    );

    // Button Content
    const buttonContent =
      loggedNode?.at(-1)?.children[0]?.children[0]?.children[0].content;
    const buttonFontSize = loggedNode?.at(-1)?.children[0]?.props?.css?.styles;
    const buttonLink = loggedNode
      ?.at(-1)
      ?.children[0].children[0]?.props?.href.split("/")
      .reverse()[1];

    return {
      component: GalleryTab,
      props: {
        state,
        loggedNode,
        sectionHeader,
        galleryContent,
        buttonContent,
        buttonFontSize,
        buttonLink,
      },
    };
  },
};

export default galleryTabProcessor;
