const SEARCH_RECOMMEND_JSON_URL = '../../src/data/search-recommend.json';
const AMAZON_COMPLETION_API_URL =
  'https://completion.amazon.com/api/2017/suggestions?mid=ATVPDKIKX0DER&alias=aps&prefix=';
const LOCAL_STORAGE_KEY = 'searchHistory';

class DataFatcher {
  async getData() {
    throw 'getData must override';
  }
}

export class JsonData extends DataFatcher {
  constructor() {
    super();
    this.url = SEARCH_RECOMMEND_JSON_URL;
  }

  async getData() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }
}

export class ApiData extends DataFatcher {
  constructor() {
    super();
    this.url = `${AMAZON_COMPLETION_API_URL}`;
  }

  async getData(prefix) {
    const response = await fetch(`${this.url}${prefix}`);
    const data = await response.json();
    return data.suggestions.map((v) => v.value);
  }
}

export class LocalStorageData extends DataFatcher {
  constructor() {
    super();
    this.key = LOCAL_STORAGE_KEY;
  }

  async getData() {
    const data = localStorage.getItem(this.key);
    return JSON.parse(data) || [];
  }

  async saveData(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  async updateData(inputValue) {
    if (!inputValue) return;
    const historyData = await this.getData();
    const updatedData = this.getUpdatedData(historyData, inputValue);
    await this.saveData(updatedData);
  }

  async removeData(item) {
    const historyData = await this.getData();
    const updatedData = historyData.filter((searchItem) => searchItem !== item);
    await this.saveData(updatedData);
  }

  getUpdatedData(historyData, inputValue) {
    const index = historyData.indexOf(inputValue);
    if (index > -1) historyData.splice(index, 1);
    historyData.unshift(inputValue);
    if (historyData.length > 5) historyData.pop();
    return historyData;
  }
}
