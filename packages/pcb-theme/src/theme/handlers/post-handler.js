const postHandler = {
  name: "Post Handler",
  priority: 10,
  pattern: "posts/",
  func: async ({ link, state, libraries }) => {
    const response = await libraries.source.api.get({
      endpoint: "posts",
    });
    const posts = await response.json();

    Object.assign(state.source.data[link], {
      posts,
    });
  },
};

export default postHandler;
