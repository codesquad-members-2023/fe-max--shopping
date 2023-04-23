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

  async getCarouselImgLastIndex() {
    const query = "/carouselImg?_sort=id&_order=desc&_limit=1";
    const res = await this.getRequest(query);
    return res[0].id;
  }

  async getInitCarousselImgSrc() {
    const query = "/carouselImg?_limit=2";
    const res = await this.getRequest(query);
    const initImg = res.map((obj) => obj.src);
    const lastImg = await this.getCarouselLastImgSrc();
    return [lastImg, ...initImg];
  }

  async getCarouselLastImgSrc() {
    const lastIndex = await this.getCarouselImgLastIndex();
    const res = await this.getCarouselImgSrc(lastIndex);
    return res;
  }

  async getCarouselImgSrc(index) {
    const query = `/carouselImg?id=${index}`;
    const res = await this.getRequest(query);
    return res[0].src;
  }

  async getSetSideBarDetails(title) {
    const query = `/sideBarDetails?text=${title}`;
    const res = await this.getRequest(query);
    return res[0].details;
  }

  async getSideBarData() {
    const query = `/sideBarData`;
    return this.getRequest(query);
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
