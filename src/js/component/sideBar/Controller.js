export class Controller {
  constructor(model, view, observer) {
    this.model = model;
    this.view = view;
    this.observer = observer;
  }

  init() {
    this.model.register("notifyToggle", () => {
      this.view.toggleSideBar(this.model.getIsSideBarOpened());
    });
    this.model.register("notifyCompress", (index) => {
      this.view.compressMenu(index, this.model.getMoreMenuCompressed(index));
    });
    this.model.register("notifyDetail", (title) => {
      this.view.renderDetailCategories(title, this.model.getDetailCategories());
    });
    
    this.view.closeSideBar = () => {
      this.hide();
    }
    this.view.setMoreMenuCompressed = (index, state) => {
      this.model.setMoreMenuCompressed(index, state);
    }
    this.view.setDetailCategories = async (title) => {
      await this.model.setDetailCategories(title);
    };
    
    this.observer.register(this);
    this.view.init(this.model.getMainCategories());
  }

  show() {
    this.observer.notify(this);
    this.model.setIsSideBarOpened(true);
  }

  hide() {
    this.model.setIsSideBarOpened(false);
  }
}
