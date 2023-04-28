import { store } from './store.js';
import { view } from './view.js';

export const controller = {
  async init() {
    await this.fetchData();
    view.handleToggleSidebar = this.handleToggleSidebar.bind(this);
    view.handleMoveSubSidebar = this.handleMoveSubSidebar.bind(this);
    view.handleMoveMainSidebar = this.handleMoveMainSidebar.bind(this);
    view.on();
  },

  async fetchData() {
    const response = await fetch('http://localhost:4000/sidebarData');
    const data = await response.json();
    store.saveData(data);
    view.renderSidebar(store.getCategories());
  },

  handleToggleSidebar() {
    view.toggleSidebar(store.isSidebarOpen);
    store.toggleSidebar();
  },

  handleMoveSubSidebar(e) {
    const selectedItemInfo = view.getSelectedItemInfo(e);
    if (!selectedItemInfo) return;

    store.setSelectedCategory(selectedItemInfo);
    view.renderSubSideBar({
      title: selectedItemInfo.category,
      category: store.getSeletedCategory(),
    });

    view.toggleSubSidebar(store.isSubSidebarOpen);
    store.toggleSubSidebar();
  },

  handleMoveMainSidebar() {
    view.toggleSubSidebar(store.isSubSidebarOpen);
    store.toggleSubSidebar();
  },
};
