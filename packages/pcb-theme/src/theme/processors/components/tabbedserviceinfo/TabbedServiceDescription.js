import React, { Fragment } from "react";
import { connect, styled, css } from "frontity";

import { fadeIn, query1000 } from "../../../styles/Variables";

const TabbedServiceDescription = ({ state, isWindowTint, descriptions }) => {
  return (
    <div>
      {state.theme.tabbedServiceInfo.locationButtons.map((isActive, i) => {
        if (isActive) {
          return descriptions.map((description, index) => {
            if (description[1]?.[i]) {
              return (
                <Div isWindowTint={isWindowTint} key={`description-${index}`}>
                  <DesHeading>{description[0]}</DesHeading>
                  <Description isWindowTint={isWindowTint}>
                    {description[1]?.[i]}
                  </Description>
                </Div>
              );
            }
          });
        }
      })}
    </div>
  );
};

export default connect(TabbedServiceDescription);

const Div = styled.div`
  ${(props) =>
    props.isWindowTint &&
    css`
      text-align: center;
    `}
`;

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
  ${(props) =>
    props.isWindowTint &&
    css`
      padding-right: 0;
    `}
  margin-bottom: 1rem;
  animation: ${fadeIn} 1s ease;
  @media (max-width: ${query1000}) {
    padding-right: 0;
  }
`;
