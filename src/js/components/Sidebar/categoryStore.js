import { BASE_API_DOMAIN, fetchJSON } from '../../utils/api.js';

export const categoryStore = {
  mainCategories: [],
  subCategories: new Map(),

  async requestMainCategories() {
    const CATEGORY_API_PATH = new URL('category', BASE_API_DOMAIN);
    this.mainCategories = await fetchJSON(CATEGORY_API_PATH);
  },

  async requestSubCategories() {
    const SUB_CATEGORY_API_PATH = new URL('subCategory', BASE_API_DOMAIN);
    const subCategoryInfos = await fetchJSON(SUB_CATEGORY_API_PATH);

    subCategoryInfos.forEach((info) => {
      const { id, details } = info;
      this.subCategories[id] = details;
    });
  },

  getMainCategory() {
    return this.mainCategories;
  },

  getSubCategory() {
    return this.subCategories;
  },
};
