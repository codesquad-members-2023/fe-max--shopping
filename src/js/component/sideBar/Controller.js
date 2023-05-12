export class Controller {
  constructor(model, view, observer) {
    this.model = model;
    this.view = view;
    this.observer = observer;

    this.init();
  }

  async init() {
    await this.model.setMainCategories();
    this.view.onClickMenuHandler = async (title) => {
      const detailCategories = await this.model.getDetailCategories(title);
      this.view.setDetailCategoriesNode(title, detailCategories);
    };
    this.observer.register(this);
  }

  show() {
    this.observer.notify(this);

    this.view.render(this.model.mainCategories);
    this.view.open();
  }

  hide() {
    this.view.close();
  }
}
