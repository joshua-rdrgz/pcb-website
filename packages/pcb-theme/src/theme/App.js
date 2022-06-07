import React from 'react';
import { connect } from 'frontity';

import Header from './tabs/Header';
import PageContent from './tabs/PageContent';
import Footer from './tabs/Footer';

const App = ({ state }) => {
  return (
    <>
      <Header />
      <PageContent />
      <Footer />
    </>
  );
};

export default connect(App);