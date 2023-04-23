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

      if (!digitalContentsAndDevices) {
        throw new Error('Invalid category title');
      }

      return Object.keys(digitalContentsAndDevices).map((key) => key);
    });
  }

  getSubCategoryItemList(mainCategoryTitle, subCategoryTitle) {
    return this.fetchData().then((data) => {
      const mainCategory = data[mainCategoryTitle];
      if (!mainCategory) {
        throw new Error('Invalid category title');
      }

      const subCategory = mainCategory[subCategoryTitle];
      if (!subCategory) {
        throw new Error('Invalid sub-category title');
      }

      return subCategory;
    });
  }
}
