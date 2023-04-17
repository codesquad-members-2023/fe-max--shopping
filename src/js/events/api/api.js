// const URL = {
//   api: 'https://completion.amazon.com/api/2017/suggestions?session-id=133-4736477-7395454&customer-id=&request-id=4YM3EXKRH1QJB16MSJGT&page-type=Gateway&lop=en_US&site-variant=desktop&client-info=amazon-search-ui&mid=ATVPDKIKX0DER&alias=aps&b2b=0&fresh=0&ks=8&prefix=',
//   jsonBase: '',

import { PATH, URL } from '../../constants/path.js';

// };

export class DataFetcher {
  constructor(url) {
    this.url = url;
  }

  async getData() {
    try {
      const response = await fetch(this.url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  // async fetchJsonData(keyword) {
  //   try {
  //     const response = await fetch(this.url);
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
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

export class JSONClient {
  constructor(path,prop ,keyword) {
    this.url = `${URL.jsonBase}/${path}?${prop}_like=${keyword}`;
  }

  async getJsonData() {
    try {
      const response = await fetch(this.url);
      console.log(response);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
