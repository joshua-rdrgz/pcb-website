import React from "react";
import { connect } from "frontity";

function Page({ state, libraries }) {
  const Html2React = libraries.html2react.Component;
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  return <Html2React html={page.content.rendered} />;
}

export default connect(Page);
