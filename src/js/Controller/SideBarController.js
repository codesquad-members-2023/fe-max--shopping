import { $, addHiddenClass } from '../utils.js';
import { SidebarView } from '../View/Sidebar/SidebarView.js';
import { Model } from '../Model/Model.js';
import { URL } from '../Constant.js';

class SidebarController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.setEvent(this.handleEvent.bind(this));
  }

  async init() {
    // await this.model.fetchData();
    // this.view.render(this.model.state);
  }

  handleEvent(action) {
    const hiddenCategory = document.querySelector('.side-bar__contents').lastChild;
    switch (action) {
      case 'closeSidebar':
        addHiddenClass('.side-background');
        break;
      case 'showAllCategories':
        $('.showAllBtn').classList.add('none');
        hiddenCategory.classList.remove('hidden');
        break;
      case 'showShortCategories':
        $('.showAllBtn').classList.remove('none');
        hiddenCategory.classList.add('hidden');
        break;
    }
  }
}

const model = new Model(URL.sidebar);
const view = new SidebarView();
const controller = new SidebarController(model, view);
controller.init();
