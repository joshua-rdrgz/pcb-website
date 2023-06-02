const mediaHandler = {
  name: "media",
  priority: 10,
  pattern: "media/",
  func: async ({ route, state, libraries }) => {
    const { api } = libraries.source;
    const response1 = await api.get({
      endpoint: "media",
      params: {
        per_page: 100,
      },
    });
    const response2 = await api.get({
      endpoint: "media",
      params: {
        per_page: 100,
        offset: 100,
      },
    });
    const items1 = await response1.json();
    const items2 = await response2.json();
    const items = [...items1, ...items2];
    const currentPageData = state.source.data[route];
    Object.assign(currentPageData, {
      data: items,
    });
  },
};

export default mediaHandler;
