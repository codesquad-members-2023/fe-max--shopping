const BASE_API_DOMAIN = new URL('http://localhost:3000');
const RECOMMEND_API_PATH = new URL('recommend', BASE_API_DOMAIN);
const AUTO_COMPLETE_API_PATH = new URL('autoComplete', BASE_API_DOMAIN);
const HERO_IMAGE_API_PATH = new URL('hero', BASE_API_DOMAIN);
const CATEGORY_API_PATH = new URL('category', BASE_API_DOMAIN);
const SUB_CATEGORY_API_PATH = new URL('subCategory', BASE_API_DOMAIN);
const PROP = {
  word: 'word',
  src: 'src',
};

export const client = {
  fetchSubCategory() {
    const subCategories = this.fetchByPromise(SUB_CATEGORY_API_PATH);

    return subCategories;
  },

  fetchCategories() {
    const categories = this.fetchByPromise(CATEGORY_API_PATH);

    return categories;
  },

  async fetchHeroImages(imageCount) {
    const heroURL = `${HERO_IMAGE_API_PATH}?_limit=${imageCount}`;
    const heroImages = await this.fetchData(heroURL, PROP.src);

    return heroImages;
  },

  async fetchAutoCompleteWords(searchWord, wordCount) {
    const autoCompleteURL = `${AUTO_COMPLETE_API_PATH}?${PROP.word}_like=${searchWord}&_limit=${wordCount}`;
    const autoCompleteWords = await this.fetchData(autoCompleteURL, PROP.word);

    return autoCompleteWords;
  },

  async fetchRecommendWords(wordCount) {
    const recommendURL = `${RECOMMEND_API_PATH}?_limit=${wordCount}`;
    const recommendWords = await this.fetchData(recommendURL, PROP.word);

    return recommendWords;
  },

  async fetchData(url, propName) {
    const dataInfo = await this.fetchJSON(url);
    const data = dataInfo.map((info) => info[`${propName}`]);

    return data;
  },

  async fetchJSON(url) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  },

  fetchByPromise(url) {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response);
        }
        return response.json();
      })
      .catch((error) => {
        throw Error(error.message);
      });
  },
};
