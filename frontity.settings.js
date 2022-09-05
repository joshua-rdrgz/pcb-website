import key from './packages/pcb-theme/src/important';
const settings = {
  name: "pcb-website",
  state: {
    frontity: {
      url: "https://performanceclearbra.local",
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
          url: "http://performanceclearbra.local",
          homepage: "/home",
          auth: key
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/yoast",
  ],
};

export default settings;
