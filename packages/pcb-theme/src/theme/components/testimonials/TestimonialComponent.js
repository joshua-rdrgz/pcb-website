import Link from "@frontity/components/link";
import { connect, styled } from "frontity";
import React from "react";

import LinkStyles from "../../styles/componentStyles/LinkStyles";
import * as Mixins from "../../styles/Mixins";
import * as Variables from "../../styles/Variables";

const TestimonialComponent = ({
  anchorHTML,
  sectionHeader,
  sectionDescription,
  buttonContent,
  buttonLink,
}) => {
  return (
    <Section id={anchorHTML}>
      <SectionHeadingContent>
        <SectionHeader>{sectionHeader}</SectionHeader>
        {sectionDescription && (
          <SectionDescription>{sectionDescription}</SectionDescription>
        )}
      </SectionHeadingContent>
      <TestimonialContainer>
        <div src="https://cdn.trustindex.io/loader.js?ce1b0cc3612b265e491696fcbdd" />
      </TestimonialContainer>
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

const SectionHeader = styled.h2`
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

const TestimonialContainer = styled.div`
  padding: 2rem 10rem 0;
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
