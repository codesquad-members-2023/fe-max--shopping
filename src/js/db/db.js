export class DB {
  constructor() {
    this.url = "http://localhost:3001";
  }

  async getRequest(query) {
    const url = this.url + query;
    const res = await fetch(url);
    return await res.json();
  }

  async getSearchHistory() {
    const query = `/searchHistory?_sort=id&_order=desc&_limit=5`;
    return await this.getRequest(query);
  }

  async getRecommend() {
    const query = `/recommend?_limit=10`;
    return await this.getRequest(query);
  }

  async getAutoComplete(text) {
    const query = `/search?text_like=${text}&_limit=10`;
    return await this.getRequest(query);
  }

  async getContentAndDevices() {
    const query = "/contentAndDevices";
    return await this.getRequest(query);
  }

  async getShopByDepartment() {
    const query = "/shopByDepartment";
    return await this.getRequest(query);
  }

  async getShopByDepartmentMore() {
    const query = "/shopByDepartmentMore";
    return await this.getRequest(query);
  }

  async getSetSideBarDetails(title) {
    const query = `/shopByDepartmentMore?text=${title}`;
    const res = await this.getRequest(query);
    return res[0].details;
  }

  removeSearchHistory(id) {
    fetch(`${this.url}/searchHistory/${id}`, {
      method: "DELETE",
    }).catch((error) => console.error(error));
  }

  savesSearchHistory(text) {
    fetch(`${this.url}/searchHistory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
      }),
    }).catch((error) => console.error(error));
  }
}
