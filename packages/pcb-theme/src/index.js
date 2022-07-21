import App from "./theme/App";
import link from "@frontity/html2react/processors/link";
import menuHandler from "./theme/handlers/menu-handler";
import mediaHandler from "./theme/handlers/media-handler";

import heroboxProcessor from "./theme/processors/heroboxProcessor";
import homeServicesProcessor from "./theme/processors/homeServicesProcessor";
import galleryTabProcessor from "./theme/processors/galleryTabProcessor";

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
      scrollPos: 0,
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
    },
  },
  libraries: {
    html2react: {
      processors: [
        link,
        heroboxProcessor,
        homeServicesProcessor,
        galleryTabProcessor,
      ],
    },
    source: {
      handlers: [menuHandler, mediaHandler],
    },
  },
};
