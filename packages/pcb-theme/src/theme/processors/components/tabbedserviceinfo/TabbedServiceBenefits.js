import React, { Fragment } from "react";
import { connect, styled, css } from "frontity";

import { fadeIn, queryLG, querySMSM } from "../../../styles/Variables";

const TabbedServiceBenefits = ({ state, benefits, types }) => {
  // console.log(benefits);
  return (
    <div>
      {state.theme.tabbedServiceInfo.typeButtons.map((isActive, i) => {
        if (isActive) {
          const uniqueBenefits = state.router.link === '/window-tint/' ? benefits[0] : benefits[0]?.[i]?.split("+");
          let totalBenefits;
          if (uniqueBenefits !== undefined) {
            totalBenefits = [...benefits?.[0]?.[i <= 1 ? i : 1]?.split("+"), ...benefits[1]];
          }
          if (state.router.link !== '/window-tint/') {
            return (
              <Fragment key={`benefits-${i}`}>
                <Type addAnimation={true}>
                  <em>
                    <strong>{types[i]}</strong>
                  </em>{"  "}
                  benefits include:
                </Type>
                {totalBenefits &&
                  totalBenefits.map((benefit, index) => {
                    return <Benefit addAnimation={true} key={`benefit-${index}`}>{benefit}</Benefit>;
                  })}
              </Fragment>
            );
          } else {
            return (
              <Section key={`benefits-${i}`}>
                <Benefits>
                  <Type addAnimation={false}>
                    <em>
                      <strong>EVOLVE</strong>
                    </em>{"  "}
                    benefits include:
                  </Type>
                  {uniqueBenefits?.[0]?.split("+").map((benefit, index) => {
                      return <Benefit addAnimation={false} key={`benefit-${index}`}>{benefit}</Benefit>;
                    })}
                </Benefits>
                <Benefits>
                  <Type addAnimation={false}>
                    <em>
                      <strong>CERAMIC IR</strong>
                    </em>{"  "}
                    benefits include:
                  </Type>
                  {uniqueBenefits?.[1]?.split("+").map((benefit, index) => {
                      return <Benefit addAnimation={false} key={`benefit-${index}`}>{benefit}</Benefit>;
                    })}
                </Benefits>
                <Benefits>
                  <Type addAnimation={false}>
                    <em>
                      <strong>Both</strong>
                    </em>{"  "}
                    films include:
                  </Type>
                  {benefits[1].map((benefit, index) => {
                      return <Benefit addAnimation={false} key={`benefit-${index}`}>{benefit}</Benefit>;
                    })}
                </Benefits>
              </Section>
            );
          }
        }
      })}
    </div>
  );
};

export default connect(TabbedServiceBenefits);

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 
    "evolve ceramic"
    "all all"; 
  @media (max-width: ${querySMSM}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'evolve'
      'ceramic'
      'all';
  }
`;

const Benefits = styled.div`
  text-align: center;
  &:last-child {
    grid-area: all;
  }
`;

const Type = styled.span`
  font-family: trade-gothic-next-compressed, sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  text-decoration: underline;
  ${props => props.addAnimation && css`
    animation: ${fadeIn} 1s ease;
  `}
`;

const Benefit = styled.p`
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  ${props => props.addAnimation && css`
    animation: ${fadeIn} 1s ease;
  `}
  @media (max-width: ${queryLG}) {
    padding-right: 0;
  }
`;
