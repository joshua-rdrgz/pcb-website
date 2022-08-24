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
      activeTypeData.push(i === 0 ? true : false);
    }
    actions.theme.tabbedServiceInfo.setButtons("typeButtons", activeTypeData);

    // Initialize Location Button Data
    const activeLocationData = [];
    for (let i = 0; i < data.locations.length; i++) {
      activeLocationData.push(i === 0 ? true : false);
    }
    actions.theme.tabbedServiceInfo.setButtons(
      "locationButtons",
      activeLocationData
    );
  }, [state.router.link]);

  return (
    <Article>
      <ButtonsContainer>
        <ButtonList>
          <Label>Coverage Options:</Label>
          <Options>
            {data.locations.map((location, i) => {
              const active = state.theme.tabbedServiceInfo.locationButtons[i];
              return (
                  <Button
                    key={`locations-button-${i + 1}`}
                    active={active}
                    onClick={() => changeActiveTab("locationButtons", i)}
                  >
                    {location}
                  </Button>
              );
            })}
          </Options>
        </ButtonList>
        <ButtonList>
          <Label>Film Options:</Label>
          <Options>
            {typeButtons.map((button, i) => {
              const active = state.theme.tabbedServiceInfo.typeButtons[i];
              return (
                <Button
                  key={`types-button-${i + 1}`}
                  active={active}
                  onClick={() => changeActiveTab("typeButtons", i)}
                >
                  {button}
                </Button>
              );
            })}
          </Options>
        </ButtonList>
      </ButtonsContainer>
      <Content>
        <TabbedServiceImage images={data.images} />
        <TabbedServiceValue values={data.values} />
        <TabbedServicePrice prices={data.prices} />
        <TabbedServiceDescription descriptions={data.descriptions} />
        <TabbedServiceBenefits
          benefits={[data.benefits, data.commonBenefits]}
          types={data.types}
        />
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

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: ${Variables.queryMDLG}) {
    justify-content: center;
    text-align: center;
    gap: 0.5rem;
  }
`;
const ButtonList = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;
  &:first-child {
    margin-right: 7rem;
    @media (max-width: ${Variables.queryMDLG}) {
      margin-right: 0;
    }
  }
`;

const Label = styled.span`
  font-size: 2rem;
`;

const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  @media (max-width: ${Variables.queryMDLG}) {
    justify-content: center;
  }
`;



const Button = styled.button`
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
    "img value"
    "img price"
    "img des"
    "img ben";
  @media (max-width: ${Variables.queryLG}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "img"
      "value"
      "price"
      "des"
      "ben";
    text-align: center;
    padding: 1rem;
  }
`;
