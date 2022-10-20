import React, { useEffect } from "react";
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

const App = ({ state }) => {
  const data = state.source.get(state.router.link);

  const isLandingPage = data.isLandingPage ? data.isLandingPage : false;

  useEffect(() => {
    document.querySelector("head").insertAdjacentHTML(
      "afterbegin",
      `
        <!-- Google Tag Manager -->
        <script>
          (function (w, d, s, l, i) {
            w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", "GTM-KFH5633");
        </script>
        <!-- End Google Tag Manager -->
      `
    );
  }, []);

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
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KFH5633"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
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
