import React from "react";
import useCustomSEO from "./hooks/useCustomSEO";
import { Head, Global, connect, loadable } from "frontity";
import Switch from "@frontity/components/switch";
import Reset from "./styles/Reset";

const Archive = loadable(() => import("./blog/Archive"));
const Post = loadable(() => import("./blog/Post"));
const Page = loadable(() => import("./components/Page"));
const Loading = loadable(() => import("./components/Loading"));
const Error = loadable(() => import("./components/Error"));

const Header = loadable(() => import("./components/layout/Header"));
const Footer = loadable(() => import("./components/layout/Footer"));

const LandingHeader = loadable(() =>
  import("./components/layout/LandingHeader")
);
const LandingFooter = loadable(() =>
  import("./components/layout/LandingFooter")
);

const App = ({ state }) => {
  const data = state.source.get(state.router.link);

  const isLandingPage = data.isLandingPage ? data.isLandingPage : false;

  useCustomSEO();

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="en" />
        <link
          rel="icon"
          type="image/png"
          href={state.theme.favicon.guid?.rendered}
        />
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
