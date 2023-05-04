import React from "react";
import { connect } from "frontity";

function PageContent({ state, libraries }) {
  const Html2React = libraries.html2react.Component;
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  return <Html2React html={post.content.rendered} />;
}

export default connect(PageContent);
