import { client } from '../../domain/client.js';
import { Component } from '../base/Component.js';
import Category from './Category.js';

export default class CategoryContainer extends Component {
  constructor() {
    super('category-container');
    this.main = new Main();
    this.sub = new Sub();
    this.init();
  }

  renderSubCategory(id) {
    this.sub.render(id);
  }

  translateLeft() {
    this.node.classList.remove('translateX-right');
    this.node.classList.add('translateX-left-half');
  }

  translateRight() {
    this.node.classList.remove('translateX-left-half');
    this.node.classList.add('translateX-right');
  }

  getTemplate() {
    return [this.main.node, this.sub.node];
  }
}

class Main extends Component {
  constructor() {
    super('category-container__main');
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
      .then(() => this.render());
  }

  getTemplate() {
    return [...this.menus];
  }
}

class Sub extends Component {
  constructor() {
    super('category-container__sub');
    this.client = client;
    this.backList = new Component('back', 'LI');
    this.categories = new Map();
    this.setBackList();
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

  setBackList() {
    const templateElement = document.createElement('template');
    const literal = `<button></button><a href="#">주메뉴</a>`;
    templateElement.innerHTML = literal;
    this.backList.node.append(templateElement.content);
  }

  getTemplate(id) {
    const targetCategory = this.categories[id];
    return [this.backList.node, ...targetCategory];
  }
}
