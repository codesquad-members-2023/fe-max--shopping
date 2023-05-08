import { BASE_URL, RES_QUERY } from "../constant.js";
import { delay } from "../util/delay.js";
import { DELAY_TIME } from "../constant.js";

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
    this.view.setRecentKeywords = this.setRecentKeywords.bind(this);
    this.view.showRecentAndRecommendKeyword = this.showRecentAndRecommendKeyword.bind(this);
    this.view.showAutoKeyword = this.showAutoKeyword.bind(this);
  }

  setRecentKeywords(userInput) {
    this.store.resetKeywords();
    const recentKeywords = JSON.parse(localStorage.getItem("recent"));

    if (!recentKeywords) {
      this.store.keywords.push(userInput);
      localStorage.setItem("recent", JSON.stringify(this.store.keywords));
      return;
    }

    recentKeywords.push(userInput);
    const isFull = recentKeywords.length === 6;

    if (isFull) {
      recentKeywords.shift();
    }

    localStorage.setItem("recent", JSON.stringify(recentKeywords));
  }

  setRecentList() {
    const recentKeywords = JSON.parse(localStorage.getItem("recent"));

    if (!recentKeywords) {
      return;
    }

    this.view.template += this.view.generateRecentTemplate(recentKeywords);
  }

  // 미완성 코드
  setAutoList() {
    fetch(`${this.url}${RES_QUERY.AUTO}`)
      .then((response) => response.json())
      .then((autoKeyword) => {
        this.store.resetKeywords();
        this.store.setKeywords(autoKeyword);
      });
  }

  setRecommendList() {
    fetch(`${this.url}${RES_QUERY.RECOMMEND}`) // new URL() 알아보기
      .then((response) => response.json())
      .then((recommendKeyword) => {
        this.store.resetKeywords();
        this.store.setKeywords(recommendKeyword);
        this.view.template += this.view.generateRecommendTemplate(this.store.getKeywords());
      });
  }

  async showRecentAndRecommendKeyword() {
    this.setRecentList();
    this.setRecommendList();
    await delay(DELAY_TIME.FETCH_FROM_DB);
    this.view.render();
    this.view.resetTemplate();
  }

  showAutoKeyword() {
    this.setAutoList();
    this.view.render();
    this.view.resetTemplate();
  }
}
