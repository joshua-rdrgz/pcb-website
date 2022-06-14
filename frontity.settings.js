import key from './packages/pcb-theme/src/important';
const settings = {
  name: "pcb-website",
  state: {
    frontity: {
      // edit this when deploying
      url: "https://performanceclearbra.dev",
      title: "Performance Clear Bra",
      description: "Marketing website of Performance Clear Bra",
    },
  },
  packages: [
    {
      name: "pcb-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "http://performanceclearbra.dev",
          homepage: "/home",
          auth: key
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
