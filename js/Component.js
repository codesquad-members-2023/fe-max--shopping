export class Component {
  $target;

  state;

  constructor($target) {
    this.$target = $target;
    this.setup();
    this.render();
  }

  setup() {}

  template() {
    return '';
  }

  render() {
    this.$target.insertAdjacentHTML('beforeend', this.template());
    this.addEvent();
  }

  addEvent() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
