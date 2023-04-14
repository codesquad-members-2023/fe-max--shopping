export class DataFetcher {
  constructor(url) {
    this.url = url;
  }

  async getData() {
    try {
      const response = await fetch(`${this.url}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}

export class HistoryFetcher extends DataFetcher {
  constructor(url) {
    super(url);
    this.url = url + 'history?_limit=5&_sort=id&_order=desc';
  }
}

export class RecommendFetcher extends DataFetcher {
  constructor(url) {
    super(url);
    this.url = url + 'recommend?_limit=10';
  }
}
