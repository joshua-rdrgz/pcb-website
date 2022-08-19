import React, { useEffect } from "react";
import { connect, styled, css } from "frontity";
import TabbedServiceImage from "./TabbedServiceImage";
import TabbedServicePrice from "./TabbedServicePrice";
import TabbedServiceDescription from "./TabbedServiceDescription";
import TabbedServiceBenefits from "./TabbedServiceBenefits";
import TabbedServiceValue from "./TabbedServiceValue";

import * as Variables from "../../../styles/Variables";
import * as Mixins from "../../../styles/Mixins";

const TabbedServiceContent = ({ state, actions, data, typeButtons }) => {
  const changeActiveTab = (page, index) => {
    actions.theme.tabbedServiceInfo.setActiveTab(page, index);
  };

  useEffect(() => {
    // Initialize Type Button Data
    const activeTypeData = [];
    for (let i = 0; i < typeButtons.length; i++) {
      activeTypeData.push(i === 0 ? true : false)
    }
    actions.theme.tabbedServiceInfo.setButtons('typeButtons', activeTypeData);

    // Initialize Location Button Data
    const activeLocationData = [];
    for (let i = 0; i < data.locations.length; i++) {
      activeLocationData.push(i === 0 ? true : false)
    }
    actions.theme.tabbedServiceInfo.setButtons('locationButtons', activeLocationData);
  }, [state.router.link]);

  return (
    <Article>
      <Types>
        {typeButtons.map((button, i) => {
          const active = state.theme.tabbedServiceInfo.typeButtons[i];
          return (
            <TypesButton
              key={`types-button-${i + 1}`}
              active={active}
              onClick={() => changeActiveTab('typeButtons', i)}
            >
              {button}
            </TypesButton>
          );
        })}
      </Types>
      <Content>
        <Locations>
          {data.locations.map((location, i) => {
            const active = state.theme.tabbedServiceInfo.locationButtons[i];
            return (
              <LocationsButton 
                key={`locations-button-${i + 1}`}
                active={active}
                onClick={() => changeActiveTab('locationButtons', i)}
              >
                {location}
              </LocationsButton>
            );
          })}
        </Locations>
        <TabbedServiceImage images={data.images} />
        <TabbedServiceValue values={data.values} />
        <TabbedServicePrice prices={data.prices} />
        <TabbedServiceDescription descriptions={data.descriptions} />
        <TabbedServiceBenefits benefits={[data.benefits, data.commonBenefits]} types={data.types} />
      </Content>
    </Article>
  );
};

export default connect(TabbedServiceContent);

const Article = styled.article`
  ${Mixins.addColors(Variables.colorBlack, Variables.colorWhite)};
  width: 80%;
  margin: 0 auto;
  border-radius: 1rem;
  padding: 2.5% 5% 5% 5%;
`;

const Types = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  @media (max-width: ${Variables.queryLG}) {
    justify-content: center;
    gap: 0.5rem;
  }
`;

const TypesButton = styled.button`
  padding: 0.5rem 2rem;
  ${Mixins.addHeadingFont(400, 3)};
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid ${Variables.colorWhite};
  ${Mixins.addColors(Variables.colorRed, Variables.colorWhite)};
  &:hover {
    background-color: ${Variables.colorGold};
  }
  ${(props) =>
    props.active &&
    css`
      background-color: ${Variables.colorGoldDeep1};
    `}
`;

const Content = styled.div`
  ${Mixins.addColors(Variables.colorWhite, Variables.colorBlack)};
  padding: 1rem 3rem;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 0.65fr 0.35fr;
  grid-template-rows: repeat(5, min-content);
  grid-template-areas:
    "btns btns"
    "img value"
    "img price"
    "img des"
    "img ben";
  @media (max-width: ${Variables.queryLG}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "btns"
      "img"
      "value"
      "price"
      "des"
      "ben";
    text-align: center;
    padding: 1rem;
  }
`;

const Locations = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-right: 1rem;
  grid-area: btns;
  @media (max-width: ${Variables.queryLG}) {
    justify-content: center;
    margin: 0 0.5rem;
  }
`;

const LocationsButton = styled.button`
  padding: 1rem;
  margin: 0.5rem 0;
  border: 1px solid ${Variables.colorRed};
  border-radius: 0.5rem;
  &:hover {
    ${Mixins.addColors(Variables.colorRed, Variables.colorWhite)};
  }
  ${(props) =>
    props.active &&
    css`
      background-color: ${Variables.colorGoldDeep1};
    `}
`;
