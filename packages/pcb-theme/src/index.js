import App from './theme/App'
import link from "@frontity/html2react/processors/link";

export default {
  name: "pcb-theme",
  roots: {
    theme: App
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  }
};
