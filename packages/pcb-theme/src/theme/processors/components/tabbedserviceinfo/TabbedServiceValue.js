import React from "react";
import { connect, styled } from "frontity";

import * as Variables from '../../../styles/Variables';

const TabbedServiceValue = ({ state, values }) => {
  return (
    <div>
      {
        state.theme.tabbedServiceInfo.typeButtons.map((isActive, i) => {
          if (isActive) {
            return (
              <Value key={`value-${i + 1}`}><em><strong>{values[i]?.toUpperCase()}</strong> value!</em></Value>
            )
          }
        })
      }
    </div>
  );
};

export default connect(TabbedServiceValue);

const Value = styled.span`
  font-family: trade-gothic-next-compressed, sans-serif;
  font-weight: 400;
  font-size: 2rem;
  text-decoration: underline;
  margin-bottom: 1rem;
  color: ${Variables.colorBlack};
  animation: ${Variables.fadeIn} 1s ease;
`;
