import App from './theme/App'
import link from "@frontity/html2react/processors/link";
import menuHandler from './theme/handlers/menu-handler';
import mediaHandler from './theme/handlers/media-handler';

import heroboxProcessor from './theme/processors/heroboxProcessor';

export default {
  name: "pcb-theme",
  roots: {
    theme: App
  },
  state: {
    theme: {
      scrollPos: 0,
      headerMenuID: 3,
      footerPagesID: 4,
      footerResourcesID: 5,
    }
  },
  actions: {
    theme: {
      beforeSSR: ({actions}) => async () => {
        await actions.source.fetch('menus');
        await actions.source.fetch('media');
      }
    }
  },
  libraries: {
    html2react: {
      processors: [link, heroboxProcessor]
      
    },
    source: {
      handlers: [menuHandler, mediaHandler]
    }
  }
};
