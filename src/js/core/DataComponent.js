export class DataComponent {
  target;
  state;
  constructor(target, url) {
    this.target = target;
    this.url = url;
    this.fetchData();
  }

  fetchData() {
    fetch(this.url)
      .then(response => response.json())
      .then(data => {
        this.state = data;
        this.render();
      });
  }
  getTemplate() {
    return '';
  }
  render() {
    this.target.insertAdjacentHTML('beforeend', this.getTemplate());
    this.setEvent();
  }
  setEvent() {}
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
