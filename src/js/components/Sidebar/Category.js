import { Component } from '../base/Component.js';

export default class Category extends Component {
  constructor(info) {
    super('category');
    this.categoryTitle = new Component('category-title', 'SPAN');
    this.categoryList = new CategoryList();
    this.compressedCategoryList = new CompressedCategoryList();
    this.init(info);
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
    this.categoryTitle.node.innerText = title;
  }
}

class CategoryList extends Component {
  constructor() {
    super('category-list', 'UL');
  }

  getTemplate(menus) {
    const allMenuTemplates = menus.reduce((acc, cur) => {
      const { id, name, subCategory } = cur;
      return acc + this.getMenuTemplate(id, name, subCategory);
    }, '');

    return allMenuTemplates;
  }

  getMenuTemplate(id, name, subCategory) {
    return `
<li data-menu-id="${id}" class="category-menu">
  <a class="category-name" href="#">${name}</a>${
      subCategory ? `<button class="detail-btn"></button>` : ''
    }
</li>
`;
  }
}

class CompressedCategoryList extends Component {
  constructor() {
    super('category-compressed', 'DETAILS');
    this.categorySummary = new CategorySummary();
    this.categoryList = new CategoryList();
  }

  getTemplate(menus) {
    this.categoryList.render(menus);

    return [this.categorySummary.node, this.categoryList.node];
  }
}

class CategorySummary extends Component {
  constructor() {
    super('category-menu', 'SUMMARY');
    this.init();
  }

  getTemplate() {
    return `<span>모두보기</span><button class="summary-btn"></button>`;
  }
}
