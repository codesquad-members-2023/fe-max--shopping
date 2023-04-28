export const sidebarStore = {};

export const store = {
  data: {},
  categories: {},
  selectedCategory: null,

  saveData(data) {
    this.data = data;
    this.setCategories();
  },

  setCategories() {
    this.categories = Object.entries(this.data).reduce((acc, [key, value]) => {
      acc[key] = Object.keys(value);
      return acc;
    }, {});
  },

  setSelectedCategory({ title, category }) {
    this.selectedCategory = this.data[title][category];
  },

  getCategories() {
    return this.categories;
  },

  getSeletedCategory() {
    return this.selectedCategory;
  },
};
