import { BASE_URL } from "../../api/index.js";

export default class CardsPanelService {
  constructor({ endpoint }) {
    this.endpoint = endpoint;
  }

  async fetchCards() {
    const res = await fetch(`${BASE_URL}${this.endpoint}`);
    return await res.json();
  }
}
