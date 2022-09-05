import React from "react";
import { styled, css, connect } from "frontity";
import Link from "@frontity/components/link";

import * as Variables from "../../../styles/Variables";
import * as Mixins from "../../../styles/Mixins";
import LinkStyles from "../../../styles/componentStyles/LinkStyles";
import TabbedServiceContent from "./TabbedServiceContent";

const TabbedServiceInfo = ({
  state,
  actions,
  anchorHTML,
  isWindowTint,
  sectionHeader,
  typeButtons,
  data,
  buttonContent,
  buttonFontSize,
  buttonLink,
}) => {
  actions.theme.tabbedServiceInfo.setCurrentPageData(data);
  return (
    <Section id={anchorHTML}>
      <SectionHeader>{sectionHeader}</SectionHeader>
      <TabbedServiceContent
        data={state.theme.tabbedServiceInfo.currentPageData}
        typeButtons={typeButtons}
        isWindowTint={isWindowTint}
      />
      <Button
        type="primary"
        link={buttonLink ? buttonLink : "/contact"}
        fontSize={buttonFontSize}
      >
        {buttonContent}
      </Button>
    </Section>
  );
};

export default connect(TabbedServiceInfo);

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionHeader = styled.h3`
  text-align: center;
  margin-top: 1rem;
  ${Mixins.addHeadingFont(700, 3.5)};
  text-shadow: ${Variables.textShadow};
  padding-top: 1rem;
  margin-bottom: 2rem;
`;

const Button = styled(Link)`
  ${(props) => LinkStyles(props.type, props.fontSize)};
  margin: 1.5rem auto;
`;
