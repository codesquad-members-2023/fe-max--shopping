import { client } from '../../domain/client.js';

export const sliderStore = {
  images: [],

  async requestImages(slideCount) {
    this.images = await client.fetchHeroImages(slideCount);
  },

  getImages() {
    return this.images;
  },
};
