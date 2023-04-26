export class KeywordStore {
  constructor() {
    this.keywords = [];
  }

  setKeywords(keywords, callback) {
    keywords.map((keyword) => this.keywords.push(keyword));
    if (callback) {
      callback(this.keywords);
    }
  }

  getKeywords() {
    return this.keywords;
  }

  resetKeywords() {
    this.keywords = [];
  }
}
