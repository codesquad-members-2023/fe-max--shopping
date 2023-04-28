import { BASE_URL } from "../constant.js";

export class KeywordController {
  constructor(view, store) {
    this.view = view;
    this.store = store;
    this.url = BASE_URL;
  }

  // KeywordController의 인스턴스가 생성되고 init을 호출하는 타이밍은 언제??
  init() {
    this.bindControllerThis();
    this.view.addKeywordEventListner();
  }

  bindControllerThis() {
    this.view.showRecentAndRecommendKeyword = this.showRecentAndRecommendKeyword.bind(this);
    this.view.showAutoKeyword = this.showAutoKeyword.bind(this);
  }

  // 작동하지 않는 코드
  setRecentKeywordStorage(userInput) {
    const rawKeywords = localStorage.getItem("recent");
    if (rawKeywords) {
      const keywordsList = JSON.parse(rawKeywords);
      const newRecentList = keywordsList.concat(userInput);
      const isFull = newRecentList.length === 6;

      if (isFull) {
        newRecentList.shift();
      }
      this.store.setKeywords(newRecentList);
    }
  }

  // 작동하지 않는 코드
  setRecentList(userInput) {
    this.setRecentKeywordStorage(userInput);
    localStorage.setItem("recent", JSON.stringify(this.store.getKeywords()));
    const rawRecentKeywords = localStorage.getItem("recent");
    const recentKeywordsList = JSON.parse(rawRecentKeywords);
    this.store.resetKeywords();
    this.view.renderRecentKeywords(recentKeywordsList);
  }

  // 미완성 코드
  setAutoList() {
    const query = "/autoKeyword";
    fetch(this.url + query)
      .then((response) => response.json())
      .then((autoKeyword) => {
        this.store.resetKeywords();
        this.store.setKeywords(autoKeyword);
      });
  }

  setRecommendList() {
    const query = "/recommendKeyword";
    fetch(this.url + query) // new URL() 알아보기
      .then((response) => response.json())
      .then((recommendKeyword) => {
        this.store.resetKeywords();
        this.store.setKeywords(recommendKeyword);
        this.view.renderRecommendKeywords(this.store.getKeywords());
      });
  }

  showRecentAndRecommendKeyword() {
    this.setRecentList();
    this.setRecommendList();
  }

  showAutoKeyword() {
    this.setAutoList();
  }
}
