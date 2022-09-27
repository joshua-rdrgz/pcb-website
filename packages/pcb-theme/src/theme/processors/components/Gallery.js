import React, { useState, useEffect, Fragment } from "react";
import { styled, css, keyframes, connect } from "frontity";
import Link from "@frontity/components/link";

import * as Mixins from "../../styles/Mixins";
import * as Variables from "../../styles/Variables";
import LinkStyles from "../../styles/componentStyles/LinkStyles";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

const Gallery = ({
  state,
  sectionHeader,
  galleryContent,
  buttonOneContent,
  buttonOneFontSize,
  buttonOneLink,
  buttonTwoContent,
  buttonTwoLink,
  isPPFGallery,
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
    // document.getElementById(
    //   "gallery-small-container"
    // ).style.transform = `translateX(${-10 * current}rem)`;
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") setGalleryPosDown();
      if (e.key === "ArrowRight") setGalleryPosUp();
    });
  }, []);

  const setGalleryPosDown = () => {
    setCurrent(
      (current = current === 4 ? galleryContent.length + 3 : current - 1)
    );
    // document.getElementById(
    //   "gallery-small-container"
    // ).style.transform = `translateX(${-10 * current}rem)`;
  };
  const setGalleryPosUp = () => {
    setCurrent(
      (current = current === galleryContent.length + 3 ? 4 : current + 1)
    );
    // document.getElementById(
    //   "gallery-small-container"
    // ).style.transform = `translateX(-${10 * current}rem)`;
  };

  // const imageSwitch = (i) => {
  //   if (i > 3 && i < galleryContentPadded.length - 4) {
  //     setCurrent(i);
  //     document.getElementById(
  //       "gallery-small-container"
  //     ).style.transform = `translateX(-${10 * i}rem)`;
  //     return;
  //   }

  //   switch (i) {
  //     case 0:
  //       setCurrent(galleryContentPadded.length - 8);
  //       document.getElementById(
  //         "gallery-small-container"
  //       ).style.transform = `translateX(-${10 * (galleryContentPadded.length - 8)}rem)`;
  //       break;
  //     case 1:
  //       setCurrent(galleryContentPadded.length - 7);
  //       document.getElementById(
  //         "gallery-small-container"
  //       ).style.transform = `translateX(-${10 * (galleryContentPadded.length - 7)}rem)`;
  //       break;
  //     case 2:
  //       setCurrent(galleryContentPadded.length - 6);
  //       document.getElementById(
  //         "gallery-small-container"
  //       ).style.transform = `translateX(-${10 * (galleryContentPadded.length - 6)}rem)`;
  //       break;
  //     case 3:
  //       setCurrent(galleryContentPadded.length - 5);
  //       document.getElementById(
  //         "gallery-small-container"
  //       ).style.transform = `translateX(-${10 * (galleryContentPadded.length - 5)}rem)`;
  //       break;
  //     case (galleryContentPadded.length - 4):
  //       setCurrent(4);
  //       document.getElementById(
  //         "gallery-small-container"
  //       ).style.transform = `translateX(-${10 * (4)}rem)`;
  //       break;
  //     case (galleryContentPadded.length - 3):
  //       setCurrent(5);
  //       document.getElementById(
  //         "gallery-small-container"
  //       ).style.transform = `translateX(-${10 * (5)}rem)`;
  //       break;
  //     case (galleryContentPadded.length - 2):
  //       setCurrent(6);
  //       document.getElementById(
  //         "gallery-small-container"
  //       ).style.transform = `translateX(-${10 * (6)}rem)`;
  //       break;
  //     case (galleryContentPadded.length - 1):
  //       setCurrent(7);
  //       document.getElementById(
  //         "gallery-small-container"
  //       ).style.transform = `translateX(-${10 * (7)}rem)`;
  //       break;
  //   }
  // };

  const galleryMainImg = [
    galleryContentPadded.find(
      (img) => img.id === `gallery-main-img-${current - 3}`
    ),
  ];

  return (
    // <IKContext urlEndpoint={urlEndpoint}>
    //   <IKImage
    //     path="home/heroboxx.jpg"
    //     transformation={[{height: 800, width: 800}]}
    //     lqip={{ active: true, quality: 5 }}
    //     loading="lazy"
    //     width='800'
    //     height='800'
    //   />
    // </IKContext>

    <Section id={isPPFGallery && "ppf-gallery"}>
      <SectionHeader>{sectionHeader}</SectionHeader>
      <Carousel>
        <LeftArrow onClick={setGalleryPosDown} />
        <RightArrow onClick={setGalleryPosUp} />
        <CarouselWrapperBig>
          <CarouselBig hasCaption={galleryMainImg[0].caption}>
            {galleryMainImg.map((imgObj) => {
              return (
                <Fragment key={imgObj.id}>
                  <CarouselImgBig
                    src={imgObj.img.src}
                    alt={imgObj.img.alt}
                    id={imgObj.id}
                  />
                  {imgObj.caption && <Caption>{imgObj.caption}</Caption>}
                </Fragment>
              );
            })}
          </CarouselBig>
        </CarouselWrapperBig>
        {/* <CarouselWrapperSmall>
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
        </CarouselWrapperSmall> */}
      </Carousel>
      {buttonTwoContent && buttonTwoLink && (
        <Button type="secondary" link={buttonTwoLink} target="_blank">
          {buttonTwoContent}
        </Button>
      )}
      <Button type="primary" link={buttonOneLink} fontSize={buttonOneFontSize}>
        {buttonOneContent}
      </Button>
    </Section>
  );
};

export default connect(Gallery);

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
    left: 1rem;
  }
  @media (max-width: ${Variables.querySM}) {
    left: 0.5rem;
  }
  @media (max-width: ${Variables.queryXSM}) {
    left: 0;
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
    right: 1rem;
  }
  @media (max-width: ${Variables.querySM}) {
    right: 0.5rem;
  }
  @media (max-width: ${Variables.queryXSM}) {
    right: 0;
  }
`;

const CarouselWrapperBig = styled.div`
  padding: 0.5rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 100%;
  @media (min-width: ${Variables.queryLGMD}) {
    height: 52.5rem;
    width: 69.7rem;
  }
`;

const CarouselBig = styled.figure`
  width: 100%;
  height: 100%;
  ${(props) =>
    props.hasCaption &&
    css`
      height: 85%;
      @media (max-width: ${Variables.querySMSM}) {
        height: 70%;
      }
      @media (max-width: ${Variables.queryXXSM}) {
        height: 60%;
      }
    `}
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

const Caption = styled.figcaption`
  text-align: center;
  font-size: 2rem;
  animation: ${fadeIn} 0.4s linear;
  @media (max-width: ${Variables.queryMDSMSM}) {
    font-size: 1.5rem;
  }
`;

// const CarouselWrapperSmall = styled.div`
//   padding: 0.5rem;
//   position: absolute;
//   bottom: 0;
//   left: 50%;
//   width: 70%;
//   height: 7rem;
//   margin-left: -35%;
//   overflow: hidden;
//   @media (min-width: ${Variables.queryLGMD}) {
//     width: 69.7rem;
//     margin-left: auto;
//     transform: translateX(-50%);
//   }
// `;

// const Container = styled.div`
//   display: flex;
//   position: absolute;
//   left: 43%;
// `;

// const CarouselSmall = styled.figure`
//   display: flex;
//   opacity: 0.5;
//   transform: scale(0.9);
//   ${(props) =>
//     props.active &&
//     css`
//       transform: scale(1.05);
//       opacity: 1;
//       left: 0;
//       transition: all 0.5s;
//     `};
// `;

// const CarouselImgSmall = styled.img`
//   width: 10rem;
//   height: 6rem;
//   border-radius: 0.5rem;
//   box-shadow: ${Variables.boxShadow};
//   cursor: pointer;
//   @media (max-width: ${Variables.queryLG}) {
//     width: 9.75rem;
//   }
//   @media (max-width: ${Variables.queryMDSMMD}) {
//     width: 9.5rem;
//   }
//   @media (max-width: ${Variables.querySM}) {
//     width: 9.25rem;
//   }
// `;

const Button = styled(Link)`
  ${(props) => LinkStyles(props.type, props.fontSize)};
  margin: 1.5rem auto;
`;
