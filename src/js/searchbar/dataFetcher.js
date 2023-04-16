class DataFetcher {
  constructor(url) {
    if (new.target === DataFetcher) {
      throw new TypeError('Cannot construct abstract instances directly');
    }
    this.url = url;
  }

  async fetchData() {
    const response = await fetch(this.url);
    return response.json();
  }
}

export class JsonData extends DataFetcher {
  constructor(url) {
    super(url);
  }
}

export class ApiData extends DataFetcher {
  constructor(url) {
    super(url);
  }

  async getData(prefix) {
    const response = await fetch(`${this.url}${prefix}`);
    const data = await response.json();
    return data.suggestions.map((v) => v.value);
  }
}

export class LocalStorageData extends DataFetcher {
  constructor(key, options) {
    super(null, options);
    this.key = key;
  }

  getData() {
    try {
      const data = localStorage.getItem(this.key);
      return JSON.parse(data);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  saveData(data) {
    if (typeof data === 'string' || typeof data === 'number') {
      localStorage.setItem(this.key, data);
    } else {
      localStorage.setItem(this.key, JSON.stringify(data));
    }
  }

  updateData(inputValue) {
    if (!inputValue) return;
    const historyData = this.getData() || [];
    const updatedData = this.getUpdatedData(historyData, inputValue);
    this.saveData(updatedData);
  }

  removeData(item) {
    const historyData = this.getData() || [];
    const updatedData = historyData.filter((searchItem) => searchItem !== item);
    this.saveData(updatedData);
  }

  getUpdatedData(historyData, inputValue) {
    const index = historyData.indexOf(inputValue);
    if (index > -1) historyData.splice(index, 1);
    historyData.unshift(inputValue);
    if (historyData.length > 5) historyData.pop();
    return historyData;
  }
}
