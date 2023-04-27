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
}

export class SideBar {
  constructor(sideBarModel, sideBarview) {
    this.model = sideBarModel;
    this.view = sideBarview;
    // this.fetchJson().then(result => {
    //   console.log(result);
    // });
    // this.getObject('digital').then(result => {
    //   console.log(result);
    // });
    this.setObj();
    // this.model.getJsonData();
  }
  init() {
    this.view.toggleSidebar();

    const jsonData = this.model.getJsonData()
    this.view.renderInitialMenu(jsonData);

    sideViewAll.addEventListener('click', () => {
      sideListMain.classList.remove('compressed');
    });

    const sideViewSimple = document.querySelector('.side__view-simple');
    sideViewSimple.addEventListener('click', () => {
      sideListMain.classList.add('compressed');
    });
  }

  fetchJson() {
    return fetch(`${URL.jsonBase}/${PATH.side}`).then(response => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    });
  }

  setObj() {
    return this.fetchJson().then(result => {
      return this.model.setJsonData(result);
    });
  }
  
  getObject(type) {
    return this.fetchJson().then(result => {
      return result[type];
    });
  }



  // getObject(type) {
  //   return this.jsonFetcher.getData().then(result => {
  //     return result[type];
  //   });
  // }
}

export class SideBarView {
  constructor(parent) {
    this.templateGenerator = new TemplateGenerator();
  }

  toggleSidebar() {
    document.addEventListener('click', e => {
      if (e.target.closest('.hamburger-btn')) {
        layerOpenState.sidebar = true;
        sideArea.classList.add('active');
        closeBtn.classList.remove('close');
        handleDimming();
      } else if (!e.target.closest('.side')) {
        layerOpenState.sidebar = false;
        sideArea.classList.remove('active');
        closeBtn.classList.add('close');
        handleDimming();
      }
    });
  }
  menuRenderer(parentNode, template) {
    parentNode.innerHTML = template;
  }

  async renderInitialMenu(jsonData){
    console.log(jsonData);
    console.log(await jsonData);
    const a = await jsonData;
    console.log(a.digital);
  }

  expandMenu() {
    sideListMain.classList.remove('compressed');
  }
  compressMenu() {
    sideListMain.classList.add('compressed');
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
        menuRenderer(sideListSub, subTemplate);
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

function menuRenderer(parentNode, template) {
  parentNode.innerHTML = template;
}
