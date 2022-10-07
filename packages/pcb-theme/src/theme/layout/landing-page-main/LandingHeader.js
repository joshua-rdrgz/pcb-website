import React from "react";
import { connect, styled } from "frontity";

import Link from "@frontity/components/link";

import pcbLOGO from "../../assets/pcb-logo.svg";

import * as Variables from "../../styles/Variables";
import LinkStyles from "../../styles/componentStyles/LinkStyles";

const LandingHeader = () => {
  return (
    <Header>
      <PcbLogo src={pcbLOGO}></PcbLogo>
      <CTA link="tel:(972)%20295-7068">(972) 295 - 7068</CTA>
    </Header>
  );
};

export default connect(LandingHeader);

const Header = styled.header`
  background-color: ${Variables.colorBlack};
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const PcbLogo = styled.img`
  width: 250px;
  margin-left: 3rem;
  @media (max-width: ${Variables.queryMD}) {
    margin-right: auto;
    width: 200px;
  }
  @media (max-width: ${Variables.querySMMD}) {
    margin-left: 1rem;
  }
`;

const CTA = styled(Link)`
  ${LinkStyles("primary")};
  padding: 0.5rem 1.5rem;
  font-size: 3rem;
  @media (max-width: ${Variables.querySMSMSM}) {
    margin: 0;
    margin-bottom: 1.5rem;
  }
`;
