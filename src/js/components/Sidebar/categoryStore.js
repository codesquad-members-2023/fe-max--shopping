import { client } from '../../domain/client.js';

export const categoryStore = {
  mainCategories: [],
  subCategories: new Map(),

  async requestMainCategories() {
    this.mainCategories = await client.fetchCategories();
  },

  async requestSubCategories() {
    const subCategoryInfos = await client.fetchSubCategory();

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
