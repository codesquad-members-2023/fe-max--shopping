export class Component {
  $target;

  constructor($target, controller) {
    this.$target = $target;
    this.controller = controller;
    this.init();
    this.setEvent();
  }

  init() {
    this.render();
  }

  template() {
    return ``;
  }

  render(data) {
    this.$target.innerHTML = this.template(data);
  }

  setEvent() {}
}
