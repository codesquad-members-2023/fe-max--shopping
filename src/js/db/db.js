import { BASE_URL } from "../constant.js";

export class Db {
  constructor() {
    this.url = BASE_URL;
  }

  async getResponse(query) {
    return fetch(this.url + query).then((response) => response.json());
  }

  getContentAndDevice() {
    const query = "/contentAndDevice";
    return this.getResponse(query);
  }

  getShopByDepartment() {
    const query = "/shopByDepartment";
    return this.getResponse(query);
  }
}
