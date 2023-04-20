import { client } from '../../domain/client.js';
import { Component } from '../base/Component.js';
import Category from './Category.js';

export default class CategoryContainer extends Component {
  constructor() {
    super('category-container');
    this.client = client;
    this.main = new Main();
    this.sub = new Sub();
    this.init();
  }

  renderSubCategory(id) {
    this.sub.render(id);
  }

  getTemplate() {
    return [this.main.node, this.sub.node];
  }
}

class Main extends Component {
  constructor() {
    super('main');
    this.client = client;
    this.menus = [];
    this.load();
  }

  load() {
    this.client
      .fetchCategories()
      .then((categoryInfos) => {
        this.menus = categoryInfos.map((categoryInfo) => new Category(categoryInfo).node);
      })
      .then(() => this.init());
  }

  getTemplate() {
    return [...this.menus];
  }
}

class Sub extends Component {
  constructor() {
    super('sub');
    this.client = client;
    this.categories = new Map();
    this.load();
  }

  load() {
    this.client.fetchSubCategory().then((subCategoryInfos) => {
      subCategoryInfos.forEach((subCategoryInfo) => this.saveSubCategory(subCategoryInfo));
    });
  }

  saveSubCategory(subCategoryInfo) {
    const { id, details } = subCategoryInfo;
    const subCategory = details.map((detail) => new Category(detail).node);
    this.categories[id] = subCategory;
  }

  getTemplate(id) {
    const targetCategory = this.categories[id];
    return [...targetCategory];
  }
}
