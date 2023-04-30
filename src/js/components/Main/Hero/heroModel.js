import { BASE_API_DOMAIN, fetchData } from '/src/js/utils/api.js';

export const heroModel = {
  images: [],

  async requestImages(slideCount) {
    const HERO_IMAGE_API_PATH = new URL('hero', BASE_API_DOMAIN);
    const heroURL = `${HERO_IMAGE_API_PATH}?_limit=${slideCount}`;

    this.images = await fetchData(heroURL, 'src');
  },

  getImages() {
    return this.images;
  },
};
