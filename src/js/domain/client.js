const BASE_API_DOMAIN = 'http://localhost:3000';
const RECOMMEND_API_PATH = 'recommend';
const AUTO_COMPLETE_API_PATH = 'autoComplete';
const HERO_IMAGE_API_PATH = 'hero';
const PROP = {
  word: 'word',
  imgSrc: 'src',
};

export const client = {
  async fetchHeroImages(imageCount) {
    const heroURL = `${BASE_API_DOMAIN}/${HERO_IMAGE_API_PATH}?_limit=${imageCount}`;
    const heroImages = await this.fetchData(heroURL, PROP.imgSrc);

    return heroImages;
  },

  async fetchAutoCompleteWords(searchWord, wordCount) {
    const autoCompleteURL = `${BASE_API_DOMAIN}/${AUTO_COMPLETE_API_PATH}?${PROP.word}_like=${searchWord}&_limit=${wordCount}`;
    const autoCompleteWords = await this.fetchData(autoCompleteURL, PROP.word);

    return autoCompleteWords;
  },

  async fetchRecommendWords(wordCount) {
    const recommendURL = `${BASE_API_DOMAIN}/${RECOMMEND_API_PATH}?_limit=${wordCount}`;
    const recommendWords = await this.fetchData(recommendURL, PROP.word);

    return recommendWords;
  },

  async fetchData(url, propName) {
    try {
      const dataInfo = await this.fetchJSON(url);
      const data = dataInfo.map((list) => list[`${propName}`]);

      return data;
    } catch (err) {
      console.log(err);
    }
  },

  async fetchJSON(url) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  },
};
