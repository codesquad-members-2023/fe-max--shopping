import { template } from './template.js';

const $ = (selector, doc = document) => doc.querySelector(selector);

export const view = {
  $sidebar: $('.sidebar'),
  $subsidebar: $('.sidebar__contents .wrap'),
  $sidebarContents: $('.sidebar .main'),
  $subSidebarContents: $('.sub-content'),
  $openSidebarButton: $('.nav-sub__hmenu'),
  $closeSidebarButton: $('.sidebar__close'),
  $moveMainButton: $('.go-main-btn'),

  renderSidebar(data) {
    const MAX_SLICE = 4;

    Object.entries(data).forEach(([title, items]) => {
      const slicedItems = items.slice(0, MAX_SLICE);
      const content = document.createElement('div');
      content.classList.add('content');

      content.innerHTML =
        this.createMainTitle(title) + this.createMainCategoryList(slicedItems);

      this.$sidebarContents.append(content);
    });
  },

  createMainTitle(title) {
    return template.mainTitle(title);
  },

  createMainCategoryList(slicedItems) {
    return template.mainCategoryList(slicedItems);
  },

  createMainExtendCategoryList(items) {
    return template.mainExtendCategoryList(items);
  },
};
