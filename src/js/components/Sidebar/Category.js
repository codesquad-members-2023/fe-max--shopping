import { Component } from '../base/Component.js';

export default class Category extends Component {
  constructor() {
    super('category');
    this.categoryTitle = new Component('category-title', 'SPAN');
    this.categoryList = new CategoryList();
    this.compressedCategoryList = new CompressedCategoryList();
  }

  getTemplate(info) {
    const { title, menus, compressedMenus } = info;

    this.setTitle(title);
    this.categoryList.render(menus);

    if (compressedMenus) {
      this.compressedCategoryList.render(compressedMenus);
      return [this.categoryTitle.node, this.categoryList.node, this.compressedCategoryList.node];
    }

    return [this.categoryTitle.node, this.categoryList.node];
  }

  setTitle(title) {
    this.categoryTitle.node.innerHTML = title;
  }
}

class CompressedCategoryList extends Component {
  constructor() {
    super('category-compressed', 'DETAILS');
    this.categoryList = new CategoryList();
  }

  getTemplate(menus) {
    const summaryElement = this.getSummaryElement();
    this.categoryList.render(menus);
    return [summaryElement, this.categoryList.node];
  }

  getSummaryElement() {
    const summaryTemplate = `<span>모두보기</span><button class="detail-btn"></button>`;
    const summaryElement = Component.makeElement('summary', summaryTemplate);

    return summaryElement;
  }
}

class CategoryList extends Component {
  constructor() {
    super('category-list', 'UL');
  }

  getTemplate(menus) {
    const allList = menus.reduce((acc, cur) => {
      const { id, name } = cur;
      return acc + this.getListTemplate(id, name);
    }, '');

    return allList;
  }

  getListTemplate(id, name) {
    return `
<li data-menu-id="${id}" class="category-menu">
  <a class="category-name" href="#">${name}</a><button class="detail-btn"></button>
</li>
`;
  }
}
