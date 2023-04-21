import { PATH, URL } from '../../constants/path.js';
import { handleDimming, layerOpenState } from '../../utils/dim.js';
import { TemplateGenerator } from '../search/TemplateGenerator.js';

const sideArea = document.querySelector('.side');
const sideBox = document.querySelector('.side__box');
const closeBtn = document.querySelector('.side__close-btn');
const sideViewAll = document.querySelector('.side__view-all');
const sideListDigital = document.querySelector('.side__list-digital');
const sideListShoopping = document.querySelector('.side__list-shopping');
const sideListMain = document.querySelector('.side__list-main');
const sideListSub = document.querySelector('.side__list-sub');

export class JSONFetcher {
  constructor(url) {
    this.url = url;
  }
  getData() {
    return fetch(`${this.url}/${PATH.side}`).then(response => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    });
  }
}
export class DataConverter {
  constructor(url) {
    this.jsonFetcher = new JSONFetcher(url);
  }
  getObject(type) {
    return this.jsonFetcher.getData().then(result => {
      return result[type];
    });
  }
  //todo: JSONFetcher와 통합하기 
  getData() {
    return this.jsonFetcher.getData().then(result => {
      return result;
    });
  }
}
export class SideBar {
  constructor() {
    this.templateGenerator = new TemplateGenerator();
    this.sideBarMenuHandler = new SideBarMenuHandler();
    this.menuRenderer = new MenuRenderer();
    this.dataConverter = new DataConverter(URL.jsonBase);
  }
  initSideBar() {
    this.sideBarMenuHandler.toggleSidebar();

    this.dataConverter.getObject(PATH.digital).then(result => {
      const template = this.templateGenerator.generateDigitalMenu(result);
      this.menuRenderer.renderDigitalMenu(template);
      this.sideBarMenuHandler.openSubMenu('.side__list-digital', result);
      this.sideBarMenuHandler.closeSubMenu();
    });

    this.dataConverter.getObject(PATH.shopping).then(result => {
      const template = this.templateGenerator.generateShoppingMenu(result);
      this.menuRenderer.renderShoppingMenu(template);
      this.sideBarMenuHandler.openSubMenu('.side__list-shopping', result);
      this.sideBarMenuHandler.closeSubMenu();
    });

    this.dataConverter.getObject(PATH.collapsible).then(result => {
      const template = this.templateGenerator.generateCollapsibleMenu(result);
      this.menuRenderer.renderCollapsibleMenu(template);
      this.sideBarMenuHandler.toggleMenu();
      this.sideBarMenuHandler.openSubMenu('.side__list-main', result);
      this.sideBarMenuHandler.closeSubMenu();
    });
  }

  getObject(type) {
    return this.jsonFetcher.getData().then(result => {
      return result[type];
    });
  }
}

export class SideBarMenuHandler {
  constructor() {
    this.templateGenerator = new TemplateGenerator();
    this.menuRenderer = new MenuRenderer();
  }
  toggleSidebar() {
    document.addEventListener('click', e => {
      if (e.target.closest('.hamburger-btn')) {
        layerOpenState.sidebar = true;
        sideArea.classList.add('active');
        closeBtn.classList.remove('close');
        handleDimming()
        
      } else if (!e.target.closest('.side') ) {
        layerOpenState.sidebar = false;
        sideArea.classList.remove('active');
        closeBtn.classList.add('close');
        handleDimming()

      }
    });
  }
  toggleMenu() {
    sideViewAll.addEventListener('click', () => {
      sideListMain.classList.remove('compressed');
    });
    const sideViewSimple = document.querySelector('.side__view-simple');
    sideViewSimple.addEventListener('click', () => {
      sideListMain.classList.add('compressed');
    });
  }
  openSubMenu(node, menuObj) {
    document.querySelector(node).addEventListener('click', e => {
      if (e.target.dataset.id) {
        return;
      } else {
        const keyText = e.target.innerText;
        const subTemplate = this.templateGenerator.generateSubMenu(
          menuObj,
          keyText
        );
        this.menuRenderer.renderSubMenu(subTemplate);
        sideBox.classList.add('translateX');
      }
    });
  }
  closeSubMenu() {
    sideListSub.addEventListener('click', e => {
      if (!e.target.dataset.id) {
        return;
      } else {
        console.log(e.target.dataset.id);
        sideBox.classList.remove('translateX');
      }
    });
  }
}

export class MenuRenderer {
  constructor() {}
  renderShoppingMenu(template) {
    sideListShoopping.innerHTML = template;
  }
  renderCollapsibleMenu(template) {
    sideListMain.innerHTML = template;
  }
  renderDigitalMenu(template) {
    sideListDigital.innerHTML = template;
  }
  renderSubMenu(template) {
    sideListSub.innerHTML = template;
  }
}
