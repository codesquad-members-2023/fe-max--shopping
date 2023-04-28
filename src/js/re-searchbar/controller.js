import { store } from './store.js';
import { view } from './view.js';

export const controller = {
  async init() {
    await this.fetchData();
    view.handleToggleSidebar = this.handleToggleSidebar.bind(this);

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
};
