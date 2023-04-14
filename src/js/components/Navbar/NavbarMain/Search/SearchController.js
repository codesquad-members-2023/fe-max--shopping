import { client } from '/src/js/domain/client.js';

export class SearchController {
  constructor({ onRecommendChanged }) {
    this.onRecommendChanged = onRecommendChanged;
  }
  async startLoadRecommend() {
    const recommendWords = await client.fetchRecommendWords();

    this.onRecommendChanged(recommendWords);
  }
}
