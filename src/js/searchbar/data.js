const URL = {
  JSON: '../../src/data/search-recommend.json',
  API: 'https://completion.amazon.com/api/2017/suggestions?mid=ATVPDKIKX0DER&alias=aps&prefix=',
};

export class DataFetcher {
  constructor(url) {
    this.url = url;
  }

  async getData() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }
}

export class JsonData extends DataFetcher {
  constructor() {
    super(URL.JSON);
  }

  async getDataFromJson() {
    const data = await this.getData();
    return data;
  }
}

export class ApiData extends DataFetcher {
  constructor(prefix) {
    super(`${URL.API}${prefix}`);
  }

  async getDataFromApi() {
    const todo = await this.getData();
    return todo.suggestions.map((v) => v.value);
  }
}
