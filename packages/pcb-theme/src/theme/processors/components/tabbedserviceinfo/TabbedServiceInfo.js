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
  sectionDescription,
  typeButtons,
  data,
  buttonContent,
  buttonLink,
}) => {
  actions.theme.tabbedServiceInfo.setCurrentPageData(data);
  return (
    <Section id={anchorHTML}>
      <SectionHeader>{sectionHeader}</SectionHeader>
      <SectionDescription>{sectionDescription}</SectionDescription>
      <TabbedServiceContent
        data={state.theme.tabbedServiceInfo.currentPageData}
        typeButtons={typeButtons}
        isWindowTint={isWindowTint}
      />
      {buttonLink.includes("#") && (
        <HashButton
          type="primary"
          onClick={() => {
            let contact = document.getElementById("landingContact");
            contact && window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {buttonContent}
        </HashButton>
      )}
      {!buttonLink.includes("#") && (
        <Button type="primary" link={buttonLink ? buttonLink : "/contact"}>
          {buttonContent}
        </Button>
      )}
    </Section>
  );
};

export default connect(TabbedServiceInfo);

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionHeader = styled.h2`
  text-align: center;
  margin-top: 1rem;
  ${Mixins.addHeadingFont(700, 3.5)};
  text-shadow: ${Variables.textShadow};
  padding-top: 1rem;
  margin-bottom: 2rem;
`;

const SectionDescription = styled.p`
  text-align: center;
  font-size: 2rem;
  padding: 0 3rem;
  margin-bottom: 2rem;
`;

const Button = styled(Link)`
  ${(props) => LinkStyles(props.type, props.fontSize)};
  margin: 1.5rem auto;
`;

const HashButton = styled.button`
  ${(props) => LinkStyles(props.type, props.fontSize)};
  margin: 1.5rem auto;
  border: none;
`;
