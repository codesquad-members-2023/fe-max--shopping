import { BASE_URL } from "../constant.js";

export class KeywordController {
  constructor(view, store) {
    this.view = view;
    this.store = store;
    this.server = this.setServerAddress();
  }

  // KeywordController의 인스턴스가 생성되고 init을 호출하는 타이밍은 언제??
  init() {
    this.view.getRecommendKeyword = this.getRecommendKeyword.bind(this);
    this.view.getAutoKeyword = this.getAutoKeyword.bind(this);
    this.view.showRecentAndRecommendKeyword = this.showRecentAndRecommendKeyword.bind(this);
    this.view.showAutoKeyword = this.showAutoKeyword.bind(this);
    this.view.addKeywordEventListner();
  }

  // 클릭했을 때, input value의 length가 1이상일 때 다 나눠야 함
  // json 서버(auto, recommend)에서 가져올때, 로컬 스토리지(recent)에서 가져올 때를 나눠야함
  // setRecentKeyword(keyword) {
  //   localStorage.setItem("recent", keyword);
  // }

  // getRecentkeyword() {
  //   this.store.setKeywords();
  // }

  getRecommendKeyword() {
    const query = "recommendKeyword";
    fetch(BASE_URL + query)
      .then((response) => response.json())
      .then((recommendKeyword) => {
        this.store.setKeywords(recommendKeyword, this.view.renderKeywords());
      });
  }

  getAutoKeyword(userInput) {
    const query = "autoKeyword";
    fetch(BASE_URL + query)
      .then((response) => response.json())
      .then((autoKeyword) => {
        if (autoKeyword.includes(userInput)) {
          this.store.setKeywords(autoKeyword, this.view.renderKeywords());
        }
      });
  }

  showRecentAndRecommendKeyword() {}

  showAutoKeyword() {}
}
