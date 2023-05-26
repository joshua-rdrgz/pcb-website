import React, { useEffect } from "react";
import { styled, css, connect } from "frontity";

import * as Variables from "../../styles/Variables";
import * as Mixins from "../../styles/Mixins";

const FAQTab = ({ state, actions, sectionHeader, faqsContainer }) => {
  useEffect(() => {
    faqsContainer.forEach((faqsBlock, faqsBlockIndex) => {
      const faqs = faqsBlock?.children[0]?.children;
      faqs.forEach((_, faqIndex) => {
        actions.theme.faq.addFAQToggleData(
          {
            index: faqIndex,
            open: false,
          },
          faqsBlockIndex
        );
      });
    });
  }, [faqsContainer]);

  return (
    <Section>
      <SectionHeader>{sectionHeader}</SectionHeader>
      <FAQsContainer>
        {faqsContainer.map((faqsBlock, faqsBlockIndex) => {
          const faqs = faqsBlock?.children[0]?.children;
          const hasHeader = faqs[0].component.includes("h");
          return (
            <FAQs key={`faq-${faqsBlockIndex}`} hasHeader={hasHeader}>
              {faqs.map((faq, faqIndex) => {
                const question = faq.component.includes("h")
                  ? null
                  : faq?.children[0]?.children[0]?.children[0]?.content;
                const answer = faq.component.includes("h")
                  ? null
                  : faq?.children[0]?.children[1]?.children[0]?.content;

                if (!question) {
                  return (
                    <FAQHeader key={`faq-Header-${faqIndex + 1}`}>
                      {faq?.children[0]?.content}
                    </FAQHeader>
                  );
                } else {
                  return (
                    <FAQ
                      key={`faq-${faqIndex + 1}`}
                      onClick={() =>
                        actions.theme.faq.setFAQToggleData(
                          faqsBlockIndex,
                          faqIndex
                        )
                      }
                    >
                      <FAQIcon
                        isOpen={
                          state.theme.faq.FAQToggleData[faqsBlockIndex][
                            faqIndex
                          ]?.open
                        }
                      >
                        &nbsp;
                      </FAQIcon>
                      <Question as={hasHeader ? 'h4' : 'h3'}>{question}</Question>
                      <Answer
                        isOpen={
                          state.theme.faq.FAQToggleData[faqsBlockIndex][
                            faqIndex
                          ]?.open
                        }
                      >
                        {answer}
                      </Answer>
                    </FAQ>
                  );
                }
              })}
            </FAQs>
          );
        })}
      </FAQsContainer>
    </Section>
  );
};

export default connect(FAQTab);

const Section = styled.section`
  background: repeating-linear-gradient(
    135deg,
    ${Variables.colorBlackPure},
    ${Variables.colorBlackPure} 20px,
    rgba(0, 0, 0, 0.88) 20px,
    rgba(0, 0, 0, 0.88) 40px
  );
`;

const FAQsContainer = styled.div`
  display: flex;
  @media (max-width: ${Variables.query800}) {
    display: block;
  }
`;

const SectionHeader = styled.h2`
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
  width: ${(props) => (props.hasHeader ? "40%" : "80%")};
  margin: 0 auto;
  position: relative;
  padding-bottom: 4rem;
  cursor: pointer;
  @media (max-width: ${Variables.query800}) {
    width: 80%;
  }
`;

const FAQHeader = styled.h3`
  text-align: center;
  ${Mixins.addHeadingFont(400, 2.5)};
  text-shadow: ${Variables.textShadow};
  color: ${Variables.colorWhite};
`;

const FAQ = styled.article`
  background-color: ${Variables.colorWhite};
  border-radius: 1rem;
  box-shadow: ${Variables.boxShadow};
`;

// *
// WILL BE REPLACED WITH CORRECT H TAG
// *
const Question = styled.div`
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
