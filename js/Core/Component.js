export class Component {
  $target;

  state;

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

  mount() {}

  render() {
    this.$target.innerHTML = this.template();
    this.mount();
  }

  setEvent() {}
}
