import React from "react";
import { Head, Global, connect } from "frontity";
import Switch from "@frontity/components/switch";
import Reset from "./styles/Reset";

import Header from "./layout/main/Header";
import PageContent from "./layout/main/PageContent";
import Footer from "./layout/main/Footer";

import LandingHeader from "./layout/landing-page-main/LandingHeader";
import LandingFooter from "./layout/landing-page-main/LandingFooter";

import Loading from "./layout/components/Loading";
import Error from "./layout/components/Error";

const App = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  actions.theme.setIsLandingPage(
    data.isLandingPage ? data.isLandingPage : false
  );
  actions.theme.setPage(state.router.link);
  const isLandingPage = data.isLandingPage ? data.isLandingPage : false;

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
      {isLandingPage ? <LandingHeader /> : <Header />}
      <Switch>
        <PageContent when={data.isPage || data.isLandingPage} />
        <Loading when={data.isFetching} />
        <Error when={data.isError} />
      </Switch>
      {isLandingPage ? <LandingFooter /> : <Footer />}
    </>
  );
};

export default connect(App);
