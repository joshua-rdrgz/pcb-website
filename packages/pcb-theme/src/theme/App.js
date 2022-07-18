import React from "react";
import { Head, Global, connect } from "frontity";
import Switch from '@frontity/components/switch';
import Reset from "./styles/Reset";

import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";

import Loading from "./layout/components/Loading";
import Error from './layout/components/Error';

const App = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Head>
        <title>Performance Clear Bra - Trusted Protection</title>
        <meta
          name="description"
          content="Performance Clear Bra is the best company for all of your car protection needs!"
        />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="en" />
        <link rel="stylesheet" href="https://use.typekit.net/pjj0xta.css" />
      </Head>
      <Global styles={Reset} />
      <Header />
      <Switch>
        <PageContent when={data.isPage}/>
        <Loading when={data.isFetching}/>
        <Error when={data.isError}/>
      </Switch>
      <Footer />
    </>
  );
};

export default connect(App);
