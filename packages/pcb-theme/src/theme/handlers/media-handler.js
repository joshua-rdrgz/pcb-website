const mediaHandler = {
  name: 'media',
  priority: 10,
  pattern: 'media/',
  func: async ({ route, state, libraries }) => {
    const { api } = libraries.source;
    const response = await api.get({
      endpoint: "media",
      params: {
        per_page: 100
      },
    });
    const items = await response.json();
    const currentPageData = state.source.data[route];
    Object.assign(currentPageData, {
      data: items,
    });
  }
};

export default mediaHandler;