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

  on() {
    this.$openSidebarButton.addEventListener('click', this.handleToggleSidebar);
    this.$closeSidebarButton.addEventListener('click', this.handleToggleSidebar);
    this.$sidebarContents.addEventListener('click', this.handleMoveSubSidebar);
    this.$moveMainButton.addEventListener('click', this.handleMoveMainSidebar);
  },

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

  renderSubSideBar({ title, category }) {
    this.$subSidebarContents.innerHTML =
      this.createMainTitle(title) + this.createMainCategoryList(category);
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

  getSelectedItemInfo({ target }) {
    if (!target.closest('li')) return;

    const title = this.selectedTitle({ target });
    const category = this.selectedCategory({ target });

    return { title, category };
  },

  selectedTitle({ target }) {
    return target.closest('.content').querySelector('.title').innerText;
  },

  selectedCategory({ target }) {
    let category = null;
    if (target.closest('li')) {
      category = target.closest('li').innerText;
    }
    return category;
  },

  toggleSidebar(isOpen) {
    if (!isOpen) {
      this.$sidebar.dataset.state = 'open';
      this.$closeSidebarButton.dataset.state = 'visible';
    } else {
      this.$sidebar.dataset.state = 'close';
      this.$closeSidebarButton.dataset.state = 'hidden';
    }
  },

  toggleSubSidebar(isOpen) {
    if (!isOpen) {
      this.$subsidebar.dataset.state = 'open';
    } else {
      this.$subsidebar.dataset.state = 'close';
    }
  },

  toggleExtendArea(isOpen) {
    if (!isOpen) {
      this.$extendArea.dataset.state = 'open';
    } else {
      this.$extendArea.dataset.state = 'close';
    }
  },
};
