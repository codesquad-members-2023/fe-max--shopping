import { BASE_API_DOMAIN, fetchJSON } from '/src/js/utils/api.js';

export const contentModel = {
  contentInfos: [],

  async requestContentInfos() {
    const CARD_IMAGE_API_PATH = new URL('cards', BASE_API_DOMAIN);
    this.contentInfos = await fetchJSON(CARD_IMAGE_API_PATH);
  },

  getContentInfos() {
    return this.contentInfos;
  },
};
