import App from './components/App'
import link from "@frontity/html2react/processors/link";

export default {
  name: "pcb-theme",
  roots: {
    theme: Root
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
