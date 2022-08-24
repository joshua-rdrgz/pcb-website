import React from "react";
import { connect, styled } from "frontity";

import * as Variables from "../../../styles/Variables";
import { Star } from "./TestimonialComponent";
import { GoVerified } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";

const Testimonial = ({ state, actions, testimonial, index }) => {
  const testimonialExcerpt = testimonial.review.slice(0, 200) + "...";
  const testimonialReview = testimonial.review;
  const openTestimonial = index => {
    actions.theme.testimonials.openTestimonial(index);
  }
  return (
    <TestimonialLI key={`testimonial-${index + 1}`}>
      <ProfileInfo>
        <ProfileFigure>
          <ProfileImg src={testimonial.img.src} alt={testimonial.img.alt} />
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
        {state.theme.testimonials[index] ? (
          <>
            <Review>{testimonialExcerpt}</Review>
            <ShowMore onClick={() => openTestimonial(index)}>Show More</ShowMore>
          </>
        ) : (
          <Review>{testimonialReview}</Review>
        )}
      </StarsReviewContainer>
    </TestimonialLI>
  );
};

export default connect(Testimonial);

const TestimonialLI = styled.li`
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

const ShowMore = styled.button`
  border: none;
  background-color: transparent;
  color: ${Variables.colorRed};
  text-decoration: underline;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: ${Variables.colorGoldDeep1};
  }
`;
