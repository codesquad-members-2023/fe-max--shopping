export class Data {
  constructor() {
    this.url = 'http://localhost:3000/';
  }

  async getKeywordData() {
    const response = await fetch(this.url + 'SearchBar');
    const data = await response.json();
    return data;
  }
}
