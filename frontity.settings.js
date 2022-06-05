const settings = {
  name: "pcb-website",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
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
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
