import React from "react";
import { styled, css } from "frontity";
import Link from "@frontity/components/link";

import LinkStyles from "../styles/componentStyles/LinkStyles";
import * as Variables from "../styles/Variables";
import * as Mixins from "../styles/Mixins";
import { FcGoogle } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";
import { GoVerified } from "react-icons/go";

const TestimonialComponent = ({
  sectionHeader,
  testimonials,
  testimonialsHeader,
  buttonContent,
  buttonFontSize,
  buttonLink,
}) => {
  return (
    <Section>
      <SectionHeader>{sectionHeader}</SectionHeader>
      <TestimonialsHeader>
        <span>{testimonialsHeader.rating}</span>
        <div>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <Reviews> {testimonialsHeader.reviews}</Reviews>
        <GoogleFigure>
          <GoogleImg
            src={testimonialsHeader.img.src}
            alt={testimonialsHeader.img.alt}
          />
        </GoogleFigure>
      </TestimonialsHeader>
      <Testimonials>
        {testimonials.map((testimonial, i) => {
          return (
            <Testimonial key={`testimonial-${i + 1}`}>
              <ProfileInfo>
                <ProfileFigure>
                  <ProfileImg
                    src={testimonial.img.src}
                    alt={testimonial.img.alt}
                  />
                </ProfileFigure>
                <ProfileName>{testimonial.name}</ProfileName>
                <span>{testimonial.date}</span>

                <GoogleLogoFigure>
                  <GoogleLogo />
                </GoogleLogoFigure>
              </ProfileInfo>
              <StarsReviewContainer>
                <div>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Verified />
                </div>
                <Review>{testimonial.review}</Review>
              </StarsReviewContainer>
            </Testimonial>
          );
        })}
      </Testimonials>
      <Button link={buttonLink} type="primary" fontSize={buttonFontSize}>
        {buttonContent}
      </Button>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const SectionHeader = styled.h3`
  text-align: center;
  margin-top: 1.5rem;
  ${Mixins.addHeadingFont(700, 3.5)};
  text-shadow: ${Variables.textShadow};
`;

const TestimonialsHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 1.5rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  text-shadow: ${Variables.textShadow};
`;

const Star = styled(AiFillStar)`
  fill: ${Variables.colorGold};
  height: 2rem;
  width: 2rem;
  vertical-align: text-top;
`;

const Reviews = styled.span`
  &::after {
    content: " on";
    font-weight: 400;
  }
`;

const GoogleFigure = styled.figure`
  width: 6.5rem;
`;

const GoogleImg = styled.img`
  vertical-align: middle;
`;

const Testimonials = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(27.5rem, 1fr));
  gap: 1rem;
  margin: 0 5%;
`;

const Testimonial = styled.li`
  list-style: none;
  background-color: ${Variables.colorGrayLight2};
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(16, 16, 16, 0.1);
  transition: all 0.2s;
  &:hover {
    transform: translateY(-1%);
  }
`;

const ProfileInfo = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-template-areas:
    "pic name google"
    "pic date google";
  padding: 0.5rem 0.5rem 0 0.5rem;
`;

const ProfileFigure = styled.figure`
  grid-area: pic;
  position: relative;
  width: 5rem;
  height: 5rem;
`;

const ProfileImg = styled.img`
  width: 4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ProfileName = styled.h4`
  font-weight: 700;
  font-size: 1.5rem;
  font-family: trade-gothic-next-compressed, sans-serif;
  align-self: end;
`;

const Verified = styled(GoVerified)`
  fill: ${Variables.colorGray1};
  height: 1.65rem;
  width: 1.65rem;
  vertical-align: text-top;
  margin-left: 0.5rem;
`;

const GoogleLogoFigure = styled.figure`
  grid-area: google;
  position: relative;
  width: 4rem;
  height: 4rem;
`;

const GoogleLogo = styled(FcGoogle)`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StarsReviewContainer = styled.div`
  padding: 0 1rem 1rem 1.5rem;
`;

const Review = styled.p`
  font-size: 1.5rem;
`;

const Button = styled(Link)`
  ${(props) => LinkStyles(props.type, props.fontSize)};
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const testimonialProcessor = {
  name: "testimonial",
  priority: 5,
  test: ({ node }) => {
    return (
      node?.props?.className?.includes("wp-block-group") &&
      node?.children[0]?.children[1]?.props?.className?.includes("ti-goog")
    );
  },
  processor: ({ node }) => {
    const loggedNode = node?.children[0]?.children;

    // section header, always will be first
    const sectionHeader = loggedNode[0]?.children[0]?.content;

    // Testimonial Content
    const testimonialsNode =
      loggedNode[1]?.children[0]?.children[1]?.children[0]?.children;
    const testimonialsHeaderNode = loggedNode[1]?.children[0]?.children[0];
    const testimonialsHeader = {
      rating:
        testimonialsHeaderNode.children[0]?.children[0]?.children[0]
          ?.children[0]?.content,
      reviews:
        testimonialsHeaderNode.children[1]?.children[0]?.children[0]
          ?.children[0]?.content,
      img: testimonialsHeaderNode.children[1]?.children[1]?.children[0]?.props,
    };
    const testimonials = [];
    testimonialsNode.forEach((_, i) => {
      const testimonialContent = testimonialsNode[i]?.children[0]?.children;
      testimonials.push({
        img: testimonialContent[0]?.children[0]?.children[0]?.props,
        name: testimonialContent[0]?.children[1]?.children[0]?.children[0]
          ?.content,
        date: testimonialContent[0]?.children[1]?.children[1]?.children[0]
          ?.content,
        review: testimonialContent[2]?.children[0]?.children[1]?.content,
        reviewLength:
          testimonialContent[2]?.children[0]?.children[1]?.content.length,
      });
    });
    testimonials.sort((a, b) => {
      if (a.reviewLength > b.reviewLength) return -1;
      if (a.reviewLength < b.reviewLength) return 1;
    });

    // Button Content
    const buttonContent =
      loggedNode?.at(-1)?.children[0]?.children[0]?.children[0].content;
    const buttonFontSize = loggedNode?.at(-1)?.children[0]?.props?.css?.styles;
    const buttonLink = loggedNode
      ?.at(-1)
      ?.children[0].children[0]?.props?.href.split("/")
      .reverse()[1];

    return {
      component: TestimonialComponent,
      props: {
        sectionHeader,
        testimonials,
        testimonialsHeader,
        buttonContent,
        buttonFontSize,
        buttonLink,
      },
    };
  },
};

export default testimonialProcessor;
