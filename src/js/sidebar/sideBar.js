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
  }
}
