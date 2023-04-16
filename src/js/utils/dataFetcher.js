export class DataFetcher {
  constructor(url) {
    this.url = url;
  }

  async getData(params) {
    try {
      const response = await fetch(`${this.url + params}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
