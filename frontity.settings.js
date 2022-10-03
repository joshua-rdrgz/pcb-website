const settings = {
  name: "pcb-website",
  state: {
    frontity: {
      url: "https://testingpcb.wpengine.com",
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
          url: "https://testingpcb.wpengine.com",
          homepage: "/home",
          redirections: "404",
          postTypes: [
            {
              type: "landing_page",
              endpoint: "landing_page"
            }
          ]
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/yoast",
  ],
};

export default settings;
