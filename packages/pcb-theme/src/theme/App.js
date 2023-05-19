import React from "react";
import { Head, Global, connect } from "frontity";
import Switch from "@frontity/components/switch";
import Reset from "./styles/Reset";

import Archive from "./blog/Archive";
import Post from "./blog/Post";
import Page from "./components/Page";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import LandingHeader from "./components/layout/LandingHeader";
import LandingFooter from "./components/layout/LandingFooter";

import Loading from "./components/Loading";
import Error from "./components/Error";

const App = ({ state }) => {
  const data = state.source.get(state.router.link);

  const isLandingPage = data.isLandingPage ? data.isLandingPage : false;

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="en" />
        <link rel="icon" type="image/png" href={state.theme.favicon.guid?.rendered} />
        <link rel="stylesheet" href="https://use.typekit.net/zau4ika.css" />
      </Head>
      <Global styles={Reset} />
      {isLandingPage ? <LandingHeader /> : <Header />}
      <main>
        <Switch>
          <Loading when={data.isFetching} />
          <Archive when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage || data.isLandingPage} />
          <Error when={data.isError} />
        </Switch>
      </main>
      {isLandingPage ? <LandingFooter /> : <Footer />}
    </>
  );
};

export default connect(App);
