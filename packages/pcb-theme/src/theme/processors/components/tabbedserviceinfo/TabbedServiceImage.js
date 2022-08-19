import React from 'react'
import { connect, styled } from 'frontity';

import * as Variables from "../../../styles/Variables";

const TabbedServiceImage = ({ state, images }) => {
  return (
    <Figure>
      {
        state.theme.tabbedServiceInfo.locationButtons.map((isActive, i) => {
          if (isActive) {
            return (
              <Img
                key={`service-image-${i + 1}`}
                src={images[i]?.src}
                alt={images[i]?.alt}
              />
            )
          }
        })
      }
    </Figure>
  )
}

const Figure = styled.figure`
  grid-area: img;
  position: relative;
`
const Img = styled.img`
  width: 90%; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-55%, -50%);
  animation: ${Variables.fadeIn} 1s ease;
  @media (max-width: ${Variables.queryLG}) {
    position: static;
    top: 0;
    left: 0;
    transform: none;
  }
`;

export default connect(TabbedServiceImage)