export class DataManager {
  constructor(url) {
    this.url = url;
  }

  async fetchData() {
    try {
      const response = await fetch(`${this.url}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}

export class HistoryManager extends DataManager {
  constructor(url) {
    super(url);
    this.url = url + 'history?_limit=5&_sort=id&_order=desc';
  }
}

export class RecommendManager extends DataManager {
  constructor(url) {
    super(url);
    this.url = url + 'recommend?_limit=10';
  }
}
