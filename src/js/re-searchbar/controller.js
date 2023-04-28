import { store } from './store.js';
import { view } from './view.js';

export const controller = {
  async init() {
    await this.fetchData();
  },

  async fetchData() {
    const response = await fetch('http://localhost:4000/sidebarData');
    const data = await response.json();
    store.saveData(data);
    view.renderSidebar(store.getCategories());
  },
};
