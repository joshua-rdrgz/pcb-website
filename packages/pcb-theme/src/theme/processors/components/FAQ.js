import React, { useEffect } from "react";
import { styled, css, connect } from "frontity";

import * as Variables from "../../styles/Variables";
import * as Mixins from "../../styles/Mixins";

const FAQTab = ({ state, actions, sectionHeader, faqs }) => {
  const faqData = state.theme.faq.FAQToggleData;
  useEffect(() => {
    faqs.forEach((_, i) => {
      actions.theme.faq.addFAQToggleData({
        index: i,
        open: false,
      });
    });
  }, [faqs]);

  return (
    <Section>
      <SectionHeader>{sectionHeader}</SectionHeader>
      <FAQs>
        {faqs.map((faq, i) => {
          const question = faq?.children[0]?.children[0]?.children[0]?.content;
          const answer = faq?.children[0]?.children[1]?.children[0]?.content;
          return (
            <FAQ
              key={`faq-${i + 1}`}
              onClick={() => actions.theme.faq.setFAQToggleData(i)}
            >
              <FAQIcon isOpen={state.theme.faq.FAQToggleData[i]?.open}>
                &nbsp;
              </FAQIcon>
              <Question>{question}</Question>
              <Answer isOpen={state.theme.faq.FAQToggleData[i]?.open}>
                {answer}
              </Answer>
            </FAQ>
          );
        })}
      </FAQs>
    </Section>
  );
};

export default connect(FAQTab);

const Section = styled.section`
  background-color: ${Variables.colorGrayDark};
`;

const SectionHeader = styled.h3`
  text-align: center;
  margin-top: 1.5rem;
  ${Mixins.addHeadingFont(700, 3.5)};
  text-shadow: ${Variables.textShadow};
  color: ${Variables.colorWhite};
  padding-top: 1rem;
  margin-bottom: 2rem;
`;

const FAQs = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 80%;
  margin: 0 auto;
  position: relative;
  padding-bottom: 4rem;
  cursor: pointer;
`;

const FAQ = styled.article`
  background-color: ${Variables.colorWhite};
  border-radius: 1rem;
  box-shadow: ${Variables.boxShadow};
`;

const Question = styled.h4`
  ${Mixins.addHeadingFont(400, 3)};
  padding-left: 4rem;
  padding-right: 2rem;
`;

const Answer = styled.p`
  font-size: 1.5rem;
  padding-left: 4rem;
  padding-right: 2rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  max-height: 0; 
  transform: scale(1, 0);
  opacity: 0;
  transform-origin: top;
  transition: all 0.4s ease;
  ${(props) =>
    props.isOpen &&
    css`
      max-height: 100rem;
      transform: scale(1, 1);
      opacity: 1;
    `}
`;

const FAQIcon = styled.span`
  position: absolute;
  width: 4rem;
  height: 4rem;
  &::before,
  &::after {
    content: "";
    width: 1.5rem;
    height: 2px;
    background: ${Variables.colorRed};
    display: inline-block;
    position: absolute;
    border-radius: 15px;
    top: 2rem;
    transition: all 0.4s;
  }
  &::before {
    transform: rotate(45deg);
    right: 1.5rem;
  }
  &::after {
    transform: rotate(135deg);
    right: 0.5rem;
  }
  ${(props) =>
    props.isOpen &&
    css`
      &::before {
        transform: rotate(135deg);
        background: ${Variables.colorGoldDeep1};
      }
      &::after {
        transform: rotate(45deg);
        background: ${Variables.colorGoldDeep1};
      }
    `}
`;
