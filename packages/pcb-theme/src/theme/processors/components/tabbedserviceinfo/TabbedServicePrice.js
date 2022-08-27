import React, { Fragment } from "react";
import { connect, styled } from "frontity";

import * as Mixins from "../../../styles/Mixins";
import * as Variables from "../../../styles/Variables";

const TabbedServicePrice = ({ state, prices }) => {
  return (
    <div>
      {state.theme.tabbedServiceInfo.typeButtons.map((isActive, typeIndex) => {
        if (isActive) {
          return state.theme.tabbedServiceInfo.locationButtons.map(
            (isActive, locationIndex) => {
              if (isActive && prices?.[typeIndex]?.[locationIndex]) {
                return (
                  <Fragment key={`price-${typeIndex}-${locationIndex}`}>
                    {state.router.link !== "/window-tint/" && (
                      <>
                        <PriceHeading>Starting from</PriceHeading>
                        <Price>${prices?.[typeIndex]?.[locationIndex]}</Price>
                      </>
                    )}
                    {state.router.link === '/window-tint/' && (
                      <WTContainer>
                        <WTPriceContainer>
                          <PriceHeading><strong>EVOLVE</strong> Starting from</PriceHeading>
                          <Price>${prices?.[typeIndex]?.[locationIndex].split('/')[0]}</Price>
                        </WTPriceContainer>
                        <WTPriceContainer>
                          <PriceHeading><strong>CERAMIC IR</strong> Starting from</PriceHeading>
                          <Price>${prices?.[typeIndex]?.[locationIndex].split('/')[1]}</Price>
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
  ${Mixins.addHeadingFont(700, 8)}
  color: ${Variables.colorRed};
  line-height: 1;
  padding-bottom: 2rem;
  animation: ${Variables.fadeIn} 1s ease;
`;

const WTContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 3rem;
  @media (min-width: ${Variables.queryLG}) and (max-width: ${Variables.queryLGXLG}) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 0;
  }
`;

const WTPriceContainer = styled.li`
  ${Mixins.liCleanUp};
  cursor: auto !important;
`;
