class KeywordStore {
  constructor() {
    this.keywords = [];
  }

  setKeywords(keywords) {
    keywords.map((keyword) => this.keywords.push(keyword));
  }

  getKeywords() {
    return this.keywords;
  }
}
