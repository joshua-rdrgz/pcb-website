import App from './theme/App'
import link from "@frontity/html2react/processors/link";
import menuHandler from './theme/handlers/menu-handler';
import mediaHandler from './theme/handlers/media-handler';

export default {
  name: "pcb-theme",
  roots: {
    theme: App
  },
  state: {
    theme: {}
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
      processors: [link]
    },
    source: {
      handlers: [menuHandler, mediaHandler]
    }
  }
};
