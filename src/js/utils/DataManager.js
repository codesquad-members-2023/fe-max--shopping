export class DataManager {
  
  constructor(url) {
    this.url = url;
    this.hisoryParams = 'history?_limit=5&_sort=id&_order=desc';
    this.recommendParams = 'recommend?_limit=10';
  }

  async fetchDefaultData() {
    const histories = await this.fetchData(this.hisoryParams);
    const recommends = await this.fetchData(this.recommendParams);

    return {
      histories,
      recommends
    }
  }

  async fetchData(params) {
    try {
      const response = await fetch(`${this.url + params}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
