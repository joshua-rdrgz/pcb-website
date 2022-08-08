import React, { useEffect } from "react";
import { styled, css, connect } from "frontity";

import * as Variables from "../../styles/Variables";
import * as Mixins from "../../styles/Mixins";

const TabbedServiceInfo = ({
  state,
  actions,
  sectionHeader,
  tabButtons,
  data
}) => {
  console.log(data);
  return (
    <>
      <p>This is a</p>
      <h1>Test</h1>
    </>
  );
};

export default connect(TabbedServiceInfo);
