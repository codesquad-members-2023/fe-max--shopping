import { URL } from '../../constants/path.js';
export class DataFetcher {
  constructor(url) {
    this.url = url;
  }

  async getData() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }
  async fetchJsonData(path) {
    const response = await fetch(`${this.url}${path}`);
    const data = await response.json();
    return data;
  }
}

export class APIClient extends DataFetcher {
  constructor(prefix) {
    super(`${URL.amazonBase}${prefix}`);
  }

  async getApiData() {
    const data = await this.getData();
    return data.suggestions.map(el => el.value);
  }
}

export class JSONClient extends DataFetcher {
  constructor(path) {
    super(`${URL.jsonBase}/${path}`);
  }
  async getSlideData() {
    const data = await this.getData();
    return data.map(el => el.image);
  }
  async getJsonTermsData(prop, keyword) {
    const data = await this.fetchJsonData(`?${prop}_like=${keyword}`);
    return data;
  }
  async getMenuData() {
    const data = await this.getData();
    return data.map(el => el.text);
  }
}
