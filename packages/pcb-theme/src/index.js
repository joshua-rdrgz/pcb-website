import App from "./theme/App";
import link from "@frontity/html2react/processors/link";
import iframe from "@frontity/html2react/processors/iframe";
import menuHandler from "./theme/handlers/menu-handler";
import mediaHandler from "./theme/handlers/media-handler";

import heroboxProcessor from "./theme/processors/heroboxProcessor";
import homeServicesProcessor from "./theme/processors/homeServicesProcessor";
import galleryTabProcessor from "./theme/processors/galleryTabProcessor";
import testimonialProcessor from "./theme/processors/testimonialProcessor";
import pageBreakProcessor from "./theme/processors/pageBreakProcessor";
import aboutUsTabProcessor from "./theme/processors/aboutUsTabProcessor";
import faqProcessor from "./theme/processors/faqProcessor";
import videoProcessor from "./theme/processors/videoProcessor";
import tabbedServiceInfoProcessor from "./theme/processors/serviceInfoProcessor";
import contactProcessor from "./theme/processors/contactProcessor";

export default {
  name: "pcb-theme",
  roots: {
    theme: App,
  },
  state: {
    theme: {
      gallery: {
        galleryPos: 4,
      },
      header: {
        scrollPos: 0,
        topBarHeight: 0,
      },
      faq: {
        FAQToggleData: [],
      },
      tabbedServiceInfo: {
        currentPageData: {},
        typeButtons: [],
        locationButtons: [],
      },
      headerMenuID: 3,
      footerPagesID: 4,
      footerResourcesID: 5,
    },
  },
  actions: {
    theme: {
      beforeSSR:
        ({ actions }) =>
        async () => {
          await actions.source.fetch("menus");
          await actions.source.fetch("media");
        },
      faq: {
        addFAQToggleData:
          ({ state }) =>
          (data) => {
            state.theme.faq.FAQToggleData = [
              ...state.theme.faq.FAQToggleData,
              data,
            ];
          },
        setFAQToggleData:
          ({ state }) =>
          (index) => {
            state.theme.faq.FAQToggleData.map((faq) => {
              if (faq.index === index) {
                faq.open = !faq.open;
              }
            });
          },
      },
      tabbedServiceInfo: {
        setCurrentPageData:
          ({ state }) =>
          (data) => {
            state.theme.tabbedServiceInfo.currentPageData = data;
          },
        setButtons:
          ({ state }) =>
          (page, data) => {
            state.theme.tabbedServiceInfo[page] = data;
          },
        setActiveTab: ({ state }) => (page, index) => {
          state.theme.tabbedServiceInfo[page].map((_, i) => {
            if (i === index) {
              state.theme.tabbedServiceInfo[page][i] = true;
            } else {
              state.theme.tabbedServiceInfo[page][i] = false;
            }
          })
        },
      },
    },
  },
  libraries: {
    html2react: {
      processors: [
        link,
        iframe,
        pageBreakProcessor,
        heroboxProcessor,
        homeServicesProcessor,
        galleryTabProcessor,
        testimonialProcessor,
        aboutUsTabProcessor,
        faqProcessor,
        videoProcessor,
        tabbedServiceInfoProcessor,
        contactProcessor,
      ],
    },
    source: {
      handlers: [menuHandler, mediaHandler],
    },
  },
};
