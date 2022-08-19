import React, { Fragment } from "react";
import { connect, styled } from "frontity";

import { fadeIn } from "../../../styles/Variables";

const TabbedServiceBenefits = ({ state, benefits, types }) => {
  return (
    <div>
      {state.theme.tabbedServiceInfo.typeButtons.map((isActive, i) => {
        if (isActive) {
          const uniqueBenefits = benefits[0]?.[i]?.split("+");
          let totalBenefits;
          if (uniqueBenefits !== undefined) {
            totalBenefits = [...benefits?.[0]?.[i]?.split("+"), ...benefits[1]];
          }
          return (
            <Fragment key={`benefits-${i}`}>
              <Type>
                <em>
                  <strong>{types[i]}</strong>
                </em>{" "}
                benefits include:
              </Type>
              {totalBenefits &&
                totalBenefits.map((benefit, index) => {
                  return <Benefit key={`benefit-${index}`}>{benefit}</Benefit>;
                })}
            </Fragment>
          );
        }
      })}
    </div>
  );
};

export default connect(TabbedServiceBenefits);

const Type = styled.span`
  font-family: trade-gothic-next-compressed, sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  text-decoration: underline;
  animation: ${fadeIn} 1s ease;
`;

const Benefit = styled.p`
  font-size: 1.25rem;
  padding-right: 2rem;
  margin-bottom: 0.25rem;
  animation: ${fadeIn} 1s ease;
`;
