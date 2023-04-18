import { PATH } from '../../constants/path.js';
import { JSONClient } from '../api/api.js';
import { TemplateGenerator } from '../search/SearchBar.js';

const sideArea = document.querySelector('.side');
const hamburgerBtn = document.querySelector('.hamburger-btn');
const closeBtn = document.querySelector('.side__close-btn');
const sideViewAll = document.querySelector('.side__view-all');
const sideViewSimple = document.querySelector('.side__view-simple');
const sideListMain = document.querySelector('.side__list-main');

// const defaultData = this.jsonFetcher.fetchJson(PATH.defaultData);

export class JSONFetcher {
  async fetchJson(key) {
    const jSONClient = new JSONClient(key);
    const data = await jSONClient.getMenuData();
    console.log(data);
    return data;
  }
}
export class SideBar {
  constructor() {
    this.jsonFetcher = new JSONFetcher();
    this.templateGenerator = new TemplateGenerator();
    this.sideBarMenuHandler = new SideBarMenuHandler();
    this.menuRenderer = new MenuRenderer();
  }
  async initSideBar() {
    //await로 데이터 가져오기
    this.sideBarMenuHandler.toggleSidebar();
    this.sideBarMenuHandler.toggleMenu();
  }
}

export class SideBarMenuHandler {
  constructor() {}
  toggleSidebar() {
    hamburgerBtn.addEventListener('click', () => {
      sideArea.classList.add('active');
    });
    closeBtn.addEventListener('click', () => {
      sideArea.classList.remove('active');
    });
  }
  toggleMenu() {
    sideViewAll.addEventListener('click', () => {
      sideListMain.classList.remove('compressed');
    });
    sideViewSimple.addEventListener('click', () => {
      sideListMain.classList.add('compressed');
    });
  }
}

export class MenuRenderer {}
