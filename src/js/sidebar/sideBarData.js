export class Data {
  constructor(url) {
    this.url = url;
  }

  fetchData() {
    return new Promise((resolve) => {
      fetch(this.url)
        .then((response) => response.json())
        .then((data) => resolve(data));
    });
  }

  getMainCategoryList(mainCategoryTitle) {
    return this.fetchData().then((data) => {
      const digitalContentsAndDevices = data[mainCategoryTitle];
      return Object.keys(digitalContentsAndDevices).map((key) => key);
    });
  }

  getSubCategoryItemList(mainCategoryTitle, subCategoryTitle) {
    return this.fetchData().then((data) => data[mainCategoryTitle][subCategoryTitle]);
  }
}
