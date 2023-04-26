import { BASE_API_DOMAIN, fetchData } from '/src/js/utils/api.js';

export const heroStore = {
  images: [],

  async requestImages(slideCount) {
    this.images = await this.fetchHeroImages(slideCount);
  },

  async fetchHeroImages(imageCount) {
    const HERO_IMAGE_API_PATH = new URL('hero', BASE_API_DOMAIN);
    const heroURL = `${HERO_IMAGE_API_PATH}?_limit=${imageCount}`;
    const heroImages = await fetchData(heroURL, 'src');

    return heroImages;
  },

  getImages() {
    return this.images;
  },
};
