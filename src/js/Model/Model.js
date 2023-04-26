export class Model {
  constructor(url) {
    this.url = url;
    this.state;
  }

  fetchData() {
    fetch(this.url)
      .then(response => response.json())
      .then(data => {
        this.state = data;
      });
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
  }
}
