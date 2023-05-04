const settings = {
  name: "pcb-website",
  state: {
    frontity: {
      url: "https://wp.performanceclearbra.com",
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
          url: "https://wp.performanceclearbra.com",
          homepage: "/home",
          postsPage: "/blog",
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
    {
      name: '@frontity/google-tag-manager-analytics',
      state: {
        googleTagManagerAnalytics: {
          containerId: 'GTM-KFH5633',
        },
      },
    },
  ],
};

export default settings;
