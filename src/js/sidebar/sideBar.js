const $ = (selector, doc = document) => doc.querySelector(selector);

export class SideBar {
  constructor(data, renderer) {
    this.data = data;
    this.renderer = renderer;
    this.eventListener = new EventListener(this);
    this.init();
  }

  init() {
    this.eventListener.registerEventListeners();
  }

  handleSubToggle() {
    $('.wrap').classList.toggle('translateX');
  }

  handleSubListOpen() {
    $('.sidebar__content--down').classList.add('open');
  }

  handleSubListClose() {
    $('.sidebar__content--down').classList.remove('open');
  }

  handleSideBarToggle() {
    $('.sidebar').classList.toggle('active');
    $('.sidebar__close').classList.toggle('hidden');
  }
}

class EventListener {
  constructor(sidebar) {
    this.sidebar = sidebar;
  }

  registerEventListeners() {
    $('.nav-sub__hmenu').addEventListener('click', () => this.sidebar.handleSideBarToggle());
    $('.sidebar__close').addEventListener('click', () => this.sidebar.handleSideBarToggle());
    $('.open-lists-btn').addEventListener('click', () => this.sidebar.handleSubListOpen());
    $('.close-lists-btn').addEventListener('click', () => this.sidebar.handleSubListClose());
    $('.go-main-btn').addEventListener('click', () => this.sidebar.handleSubToggle());
    $('.sidebar__contents .main').addEventListener('click', (e) => this.sidebar.moveSubList(e));
  }
}
