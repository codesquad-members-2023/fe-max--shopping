import { BASE_URL } from "../../api/index.js";

export default class SideBarService {
  constructor({ endpoint }) {
    this.endpoint = endpoint;
  }

  async fetchMenuData() {
    const res = await fetch(`${BASE_URL}${this.endpoint}`);
    return await res.json();
  }

  parseMenuData(menuData) {
    const mainMenuOptions = menuData
      .map(({ sectionTitle, categories }) => {
        return [{ sectionTitle }, ...categories];
      })
      .flat()
      .map((item, idx) => {
        return { ...item, id: idx };
      });

    const subMenuContents = mainMenuOptions.filter((category) => {
      return category.subcategories;
    });

    return { mainMenuOptions, subMenuContents };
  }
}
