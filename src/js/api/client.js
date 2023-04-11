const BASE_API_DOMAIN = 'http://localhost:3000/';
const RECOMMEND_API_PATH = 'recommend';

export const client = {
  async fetchRecommendWords() {
    try {
      const recommendURL = `${BASE_API_DOMAIN}${RECOMMEND_API_PATH}`;
      const recommendList = await this.fetch(recommendURL);
      const recommendWords = recommendList.map((list) => list.word);

      return recommendWords;
    } catch (err) {
      console.log(err);
    }
  },

  async fetch(url) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  },
};
