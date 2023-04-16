export class DB {
  constructor() {}

  async getSearchHistory() {
    const url =
      "http://localhost:3001/searchHistory?_sort=id&_order=desc&_limit=5";
    const res = await fetch(url);
    return await res.json();
  }

  async getRecommend() {
    const url = "http://localhost:3001/recommend?_limit=10";
    const res = await fetch(url);
    return await res.json();
  }

  async getAutoComplete(text) {
    const url = `http://localhost:3001/search?text_like=${text}&_limit=10`;
    const res = await fetch(url);
    return await res.json();
  }

  async getAutoComplete(text) {
    const url = `http://localhost:3001/search?text_like=${text}&_limit=10`;
    const res = await fetch(url);

    return await res.json();
  }

  removeSearchHistory(id) {
    fetch(`http://localhost:3001/searchHistory/${id}`, {
      method: "DELETE",
    }).catch((error) => console.error(error));
  }

  savesSearchHistory(text) {
    fetch("http://localhost:3001/searchHistory", {
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
