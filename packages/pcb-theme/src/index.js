import App from './theme/App'
import link from "@frontity/html2react/processors/link";
import menuHandler from './theme/handlers/menu-handler';

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
      }
    }
  },
  libraries: {
    html2react: {
      processors: [link]
    },
    source: {
      handlers: [menuHandler]
    }
  }
};
