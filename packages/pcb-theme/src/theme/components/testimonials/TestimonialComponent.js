import React, { useEffect } from "react";
import { styled, css, connect } from "frontity";
import Link from "@frontity/components/link";

import Testimonial from "./Testimonial";

import LinkStyles from "../../styles/componentStyles/LinkStyles";
import * as Variables from "../../styles/Variables";
import * as Mixins from "../../styles/Mixins";
import { AiFillStar } from "react-icons/ai";

const TestimonialComponent = ({
  state,
  actions,
  sectionHeader,
  sectionDescription,
  testimonials,
  testimonialsHeader,
  buttonContent,
  buttonLink,
}) => {
  useEffect(() => {
    actions.theme.testimonials.setViewportWidth(window.outerWidth);
    testimonials.forEach((testimonial) =>
      actions.theme.testimonials.initTestimonials(
        testimonial.review.length > 200 ? true : false
      )
    );
  }, []);
  const testimonialOutput = (minIndex, maxIndex) =>
    testimonials.map((testimonial, i) => {
      while (i >= minIndex && i <= maxIndex) {
        return (
          <Testimonial
            key={`testimonial-${i}`}
            testimonial={testimonial}
            index={i}
          />
        );
      }
    });
  return (
    <Section>
      <SectionHeadingContent>
        <SectionHeader>{sectionHeader}</SectionHeader>
        {sectionDescription && (
          <SectionDescription>{sectionDescription}</SectionDescription>
        )}
      </SectionHeadingContent>
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
        {state.theme.testimonials.viewportWidth >= 1000 ? (
          <>
            <TestimonialsCol>{testimonialOutput(0, 2)}</TestimonialsCol>
            <TestimonialsCol>{testimonialOutput(3, 5)}</TestimonialsCol>
            <TestimonialsCol>{testimonialOutput(6, 8)}</TestimonialsCol>
          </>
        ) : (
          <>
            <TestimonialsCol>{testimonialOutput(0, 4)}</TestimonialsCol>
            <TestimonialsCol>{testimonialOutput(5, 8)}</TestimonialsCol>
          </>
        )}
      </Testimonials>
      {buttonLink.includes("#") && (
        <HashButton
          type="primary"
          onClick={() => {
            let contact = document.getElementById("landingContact");
            contact && window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {buttonContent}
        </HashButton>
      )}
      {!buttonLink.includes("#") && (
        <Button link={buttonLink} type="primary">
          {buttonContent}
        </Button>
      )}
    </Section>
  );
};

export default connect(TestimonialComponent);

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const SectionHeadingContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 75%;
  margin: 0 auto;
  text-align: center;
`;

const SectionHeader = styled.h3`
  margin-top: 1.5rem;
  ${Mixins.addHeadingFont(700, 3.5)};
  text-shadow: ${Variables.textShadow};
  &:after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 8rem;
    padding-top: 5px;
    border-bottom: 5px ${Variables.colorRedDeep1} solid;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.5rem;
  @media (max-width: ${Variables.query400}) {
    text-align: left;
  }
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

// exported for Testimonial.js
export const Star = styled(AiFillStar)`
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
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 1rem;
  margin: 0 5%;
`;

const TestimonialsCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Button = styled(Link)`
  ${(props) => LinkStyles(props.type, props.fontSize)};
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const HashButton = styled.button`
  ${(props) => LinkStyles(props.type, props.fontSize)};
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 3rem;
  border: none;
`;
