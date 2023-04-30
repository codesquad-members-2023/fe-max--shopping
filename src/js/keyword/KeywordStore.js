export class KeywordStore {
  constructor() {
    this.keywords = [];
  }

  setKeywords(keywords) {
    keywords.forEach((keyword) => this.keywords.push(keyword));
  }

  getKeywords() {
    return this.keywords;
  }

  resetKeywords() {
    this.keywords = [];
  }
}
