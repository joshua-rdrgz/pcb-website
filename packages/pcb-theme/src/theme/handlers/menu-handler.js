// Menu Handler -- adds nav links and menu info to Frontity State
const menuHandler = {
  name: 'menu',
  priority: 10,
  pattern: 'menus/',
  func: async ({ route, state, libraries }) => {
    const { api } = libraries.source;
    const response = await api.get({
      endpoint: "menu-items",
      params: {
        per_page: 100
      },
      auth: state.source.auth
    });
    const menuResponse = await api.get({
      endpoint: "menus",
      auth: state.source.auth,
    });
    const items = await response.json();
    const menuItems = await menuResponse.json();
    const currentPageData = state.source.data[route];
    Object.assign(currentPageData, {
      navLinks: items,
      isMenu: true,
      menuData: menuItems
    });
  }
};

export default menuHandler;