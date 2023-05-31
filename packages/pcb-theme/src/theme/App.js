import React from "react";
import useCustomSEO from "./hooks/useCustomSEO";
import { Head, Global, connect, loadable } from "frontity";
import Switch from "@frontity/components/switch";
import Reset from "./styles/Reset";
import gatherFeaturedImage from "./helpers/gatherFeaturedImage";

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

  const featuredImage = gatherFeaturedImage(state, data);

  const { isCoreSitePage } = useCustomSEO();

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
        {isCoreSitePage && (
          <script type="application/ld+json">
            {`
            {
              "@context": "http://www.schema.org",
              "@type": "AutomotiveBusiness",
              "name": "Performance Clear Bra",
              "url": "https://performanceclearbra.com${state.router.link}",
              "priceRange": "$$$$",
              "image": "${featuredImage}",
              "description": "Performance Clear Bra is the number 1 shop in Fort Worth, Texas for all of your paint protection film installation needs.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2800 Shamrock Ave., Suite 116",
                "addressLocality": "Fort",
                "addressRegion": "Texas",
                "postalCode": "76107",
                "addressCountry": "USA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "32.764070916053754",
                "longitude": "-97.35543553105796"
              },
              "hasMap": "https://goo.gl/maps/Qbx4QyoywH4dg9N2A",
              "openingHours": "Mo 09:00-17:00 Tu 09:00-17:00 We 09:00-17:00 Th 09:00-17:00 Fr 09:00-17:00",
              "telephone": "(972)295-7068"
            }
          `}
          </script>
        )}
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
