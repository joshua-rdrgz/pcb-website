import React from "react";
import { connect, styled, css } from "frontity";

import * as Variables from "../../../styles/Variables";

const TabbedServiceValue = ({ state, isWindowTint, values }) => {
  if (!isWindowTint) {   
    return (
      <Div isWindowTint={isWindowTint}>
        {state.theme.tabbedServiceInfo.typeButtons.map((isActive, typeIndex) => {
          if (isActive) {
            return state.theme.tabbedServiceInfo.locationButtons.map(
              (isActive, locationIndex) => {
                if (isActive) {
                  return (
                    <Value key={`value-${typeIndex}-${locationIndex}`}>
                      <strong>
                        <em>{values[typeIndex]?.[locationIndex]?.[0]}</em>
                      </strong>
                      &nbsp;{values[typeIndex]?.[locationIndex]?.[1]}
                    </Value>
                  );
                }
              }
            );
          }
        })}
      </Div>
    );
  }
  return null;
};

export default connect(TabbedServiceValue);

const Div = styled.div`
  ${(props) =>
    props.isWindowTint &&
    css`
      text-align: center;
      margin-bottom: 1rem;
    `}
`;

const Value = styled.span`
  font-family: trade-gothic-next-compressed, sans-serif;
  font-weight: 400;
  font-size: 2rem;
  text-decoration: underline;
  margin-bottom: 1rem;
  color: ${Variables.colorBlack};
  animation: ${Variables.fadeIn} 1s ease;
`;
