import React from 'react';
import { connect } from 'frontity';

function Header({ state }) {
  const data = state.source.get()
  return (
    <header>Header</header>
  )
}

export default connect(Header);