import React, { Fragment } from "react";
import { connect, styled } from "frontity";

import { fadeIn, queryLG } from "../../../styles/Variables";

const TabbedServiceDescription = ({ state, descriptions }) => {
  return (
    <div>
      {state.theme.tabbedServiceInfo.locationButtons.map((isActive, i) => {
        if (isActive) {
          return descriptions.map((description, index) => {
            if (description[1]?.[i]) {
              return (
                <Fragment key={`description-${index}`}>
                  <DesHeading>{description[0]}</DesHeading>
                  <Description>{description[1]?.[i]}</Description>
                </Fragment>
              );
            }
          });
        }
      })}
    </div>
  );
};

export default connect(TabbedServiceDescription);

const DesHeading = styled.span`
  font-family: trade-gothic-next-compressed, sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  text-decoration: underline;
  animation: ${fadeIn} 1s ease;
`;

const Description = styled.p`
  font-size: 1.25rem;
  padding-right: 2rem;
  margin-bottom: 1rem;
  animation: ${fadeIn} 1s ease;
  @media (max-width: ${queryLG}) {
    padding-right: 0;
  }
`;
