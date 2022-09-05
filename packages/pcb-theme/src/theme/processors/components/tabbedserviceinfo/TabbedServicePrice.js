import React, { Fragment } from "react";
import { connect, styled, css } from "frontity";

import * as Mixins from "../../../styles/Mixins";
import * as Variables from "../../../styles/Variables";

const TabbedServicePrice = ({ state, isWindowTint, prices }) => {
  return (
    <div>
      {state.theme.tabbedServiceInfo.typeButtons.map((isActive, typeIndex) => {
        if (isActive) {
          return state.theme.tabbedServiceInfo.locationButtons.map(
            (isActive, locationIndex) => {
              if (isActive && prices?.[typeIndex]?.[locationIndex]) {
                return (
                  <Fragment key={`price-${typeIndex}-${locationIndex}`}>
                    {!isWindowTint && (
                      <>
                        <PriceHeading>Starting from</PriceHeading>
                        <Price isWindowTint={isWindowTint}>
                          ${prices?.[typeIndex]?.[locationIndex]}
                        </Price>
                      </>
                    )}
                    {isWindowTint && (
                      <WTContainer>
                        <WTPriceContainer>
                          <PriceHeading>
                            <strong>EVOLVE</strong> Starting from
                          </PriceHeading>
                          <Price isWindowTint={isWindowTint}>
                            $
                            {prices?.[typeIndex]?.[locationIndex].split("/")[0]}
                          </Price>
                        </WTPriceContainer>
                        <WTPriceContainer>
                          <PriceHeading>
                            <strong>CERAMIC IR</strong> Starting from
                          </PriceHeading>
                          <Price isWindowTint={isWindowTint}>
                            $
                            {prices?.[typeIndex]?.[locationIndex].split("/")[1]}
                          </Price>
                        </WTPriceContainer>
                      </WTContainer>
                    )}
                  </Fragment>
                );
              }
            }
          );
        }
      })}
    </div>
  );
};

export default connect(TabbedServicePrice);

const PriceHeading = styled.span`
  font-family: trade-gothic-next-compressed, sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  animation: ${Variables.fadeIn} 1s ease;
`;

const Price = styled.h4` 
  ${props => props.isWindowTint ? css`
    ${Mixins.addHeadingFont(700, 6.5)};
  ` : css`
    ${Mixins.addHeadingFont(700, 8)}
  `}
  color: ${Variables.colorRed};
  line-height: 1;
  padding-bottom: 2rem;
  animation: ${Variables.fadeIn} 1s ease;
`;

const WTContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 3rem;
  text-align: center;
  @media (max-width: ${Variables.querySMSM}) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 0;
  }
`;

const WTPriceContainer = styled.li`
  ${Mixins.liCleanUp};
  cursor: auto !important;
`;
